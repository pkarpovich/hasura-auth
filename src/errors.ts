import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ENV, generateRedirectUrl } from './utils';

// TODO Errors must be put in a shared package that the SDK also uses
export type ErrorPayload = {
  error: string;
  status: StatusCodes;
  message: string;
};

export const REQUEST_VALIDATION_ERROR: ErrorPayload = {
  status: StatusCodes.BAD_REQUEST,
  error: 'invalid-request',
  message: 'The request payload is incorrect',
};

const asErrors = <T>(et: {
  [K in keyof T]: Pick<ErrorPayload, 'status' | 'message'> & {
    /**
     * Determines if the error can leak information about users to attackers.
     */
    sensitive?: boolean;
  };
}) => et;

export const ERRORS = asErrors({
  'route-not-found': {
    status: StatusCodes.NOT_FOUND,
    message: 'Route not found',
  },
  'disabled-endpoint': {
    status: StatusCodes.CONFLICT,
    message: 'This endpoint is disabled',
  },
  'invalid-request': {
    status: StatusCodes.BAD_REQUEST,
    message: 'The request payload is incorrect',
  },
  'invalid-expiry-date': {
    status: StatusCodes.BAD_REQUEST,
    message: 'The expiry date must be greater than the current date',
  },
  'disabled-mfa-totp': {
    status: StatusCodes.BAD_REQUEST,
    message: 'MFA TOTP is not enabled for this user',
  },
  'no-totp-secret': {
    status: StatusCodes.BAD_REQUEST,
    message: 'OTP secret is not set for user',
  },
  'disabled-user': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'User is disabled',
    sensitive: true,
  },
  'invalid-email-password': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Incorrect email or password',
    sensitive: true,
  },
  'invalid-otp': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid or expired OTP',
  },
  'invalid-ticket': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid or expired verification ticket',
  },
  'invalid-webauthn-security-key': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid WebAuthn security key',
  },
  'invalid-webauthn-verification': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid WebAuthn verification',
  },
  'unverified-user': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Email is not verified',
  },
  'email-already-in-use': {
    status: StatusCodes.CONFLICT,
    message: 'Email already in use',
    sensitive: true,
  },
  'mfa-type-not-found': {
    status: StatusCodes.BAD_REQUEST,
    message: 'There is no active MFA set for the user',
  },
  'email-already-verified': {
    status: StatusCodes.BAD_REQUEST,
    message: "User's email is already verified",
    sensitive: true,
  },
  'totp-already-active': {
    status: StatusCodes.BAD_REQUEST,
    message: 'TOTP MFA already active',
  },
  'user-not-found': {
    status: StatusCodes.BAD_REQUEST,
    message: 'No user found',
    sensitive: true,
  },
  'user-not-anonymous': {
    status: StatusCodes.BAD_REQUEST,
    message: 'Logged in user is not anonymous',
  },
  'forbidden-anonymous': {
    status: StatusCodes.FORBIDDEN,
    message: 'Anonymous users cannot access this endpoint',
  },
  'invalid-refresh-token': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid or expired refresh token',
  },
  'invalid-pat': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid or expired personal access token',
  },
  'invalid-admin-secret': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'Invalid admin secret',
  },
  'unauthenticated-user': {
    status: StatusCodes.UNAUTHORIZED,
    message: 'User is not logged in',
  },
  'forbidden-endpoint-in-production': {
    status: StatusCodes.BAD_REQUEST,
    message: 'This endpoint is only available on test environments',
  },
  'invalid-sign-in-method': {
    status: StatusCodes.BAD_REQUEST,
    message: 'Incorrect sign in method',
  },
  'cannot-send-sms': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Error sending SMS',
  },
  'internal-error': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Internal server error',
  },
  'invalid-oauth-configuration': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Invalid OAuth configuration',
  },
  'invalid-event-id': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Invalid event ID',
  },
  'event-is-not-started': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message:
      'This event is not active yet. Please check back 15 minutes before the scheduled start time. If you need help, shout to your nearest Runaway admin.',
  },
  'event-is-already-finished': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message:
      'This event has ended. If you need help, shout to your nearest Runaway admin.',
  },
  'event-is-expired': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message:
      'This event has expired. If you need help, shout to your nearest Runaway admin.',
  },
  'sh-event-is-already-finished': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Event is already finished',
  },
  'sh-event-is-already-started': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'The game has already started.',
  },
  'lead-player-already-logged-in': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Lead Player is already logged in',
  },
  'no-lead-player': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Lead Player is not logged in',
  },
  'no-slots': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'The game has reached the limit of max players.',
  },
  'name-already-in-use': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Name already in use',
  },
  'invalid-code': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Invalid code or role',
  },
  'invalid-game-permission': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'User does not have permission to access this game',
  },
  'test-error': {
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Test error',
  },
});

export const sendError = (
  res: Response,
  code: keyof typeof ERRORS,
  {
    customMessage,
    redirectTo,
  }: { customMessage?: string; redirectTo?: string } = {},
  forwardRedirection?: boolean
) => {
  const isSensitive = ENV.AUTH_CONCEAL_ERRORS && !!ERRORS[code].sensitive;
  const error = isSensitive ? ERRORS['invalid-request'] : ERRORS[code];
  const message = (isSensitive ? null : customMessage) ?? error.message;
  const status = error.status;

  if (forwardRedirection && redirectTo) {
    const redirectUrl = generateRedirectUrl(redirectTo, {
      error: code,
      errorDescription: message,
    });
    return res.redirect(redirectUrl);
  }

  return res.status(status).send({ status, message, error: code });
};

/**
 * This is a custom error middleware for Express.
 * https://expressjs.com/en/guide/error-handling.html
 */
export async function serverErrors(
  error: Error,
  _req: Request,
  res: Response,
  // * See: https://stackoverflow.com/a/61464426
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): Promise<unknown> {
  return sendError(res, 'internal-error', {
    customMessage: JSON.stringify({
      message: error.message || 'An unknown error occurred',
      stack: error.stack,
    }),
  });
}

export const sendUnspecifiedError = (res: Response, e: unknown) => {
  const error = e as Error;
  if (error.message in ERRORS) {
    return sendError(res, error.message as keyof typeof ERRORS);
  } else {
    return sendError(res, 'internal-error', {
      customMessage: JSON.stringify({
        message: error.message || 'An unknown error occurred',
        stack: error.stack,
      }),
    });
  }
};
