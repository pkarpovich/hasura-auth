import { RequestHandler } from 'express';
import { logger } from '@/logger';
import { getSignInResponse, getUserByEmail } from '@/utils';
import { sendError } from '@/errors';
import { email, Joi } from '@/validation';
import { getEventById, getUserProfile } from '@/utils/event';

export const signInCodeSchema = Joi.object({
  email: email.required(),
  eventId: Joi.string().required(),
  code: Joi.string().required(),
  expectedRole: Joi.string().required(),
}).meta({ className: 'SignInCodeSchema' });

export const signInCodeHandler: RequestHandler<
  {},
  {},
  { email: string; eventId: string; code: string; expectedRole: string }
> = async (req, res) => {
  const { email, eventId, code, expectedRole } = req.body;
  logger.debug(
    `Sign in with code: ${email} ${eventId} ${code} ${expectedRole}`
  );

  const user = await getUserByEmail(email);

  if (!user) {
    return sendError(res, 'invalid-email-password');
  }

  if (user.disabled) {
    return sendError(res, 'disabled-user');
  }

  const userMetadata = await getUserProfile(email);
  if (!userMetadata) {
    return sendError(res, 'invalid-email-password');
  }

  const event = await getEventById({
    expectedRole,
    eventId,
    code,
  });

  if (!event) {
    return sendError(res, 'invalid-event-id');
  }

  if (event.codes.length === 0) {
    return sendError(res, 'invalid-code');
  }

  const isUserGrantedForEvent = userMetadata.gamePermissions.some(
    (gamePermission) =>
      gamePermission.game === event.gameType &&
      gamePermission.permission === expectedRole
  );
  if (!isUserGrantedForEvent) {
    return sendError(res, 'invalid-game-permission');
  }

  const signInTokens = await getSignInResponse({
    userId: user.id,
    checkMFA: true,
  });

  return res.send(signInTokens);
};
