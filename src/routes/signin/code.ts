import { RequestHandler } from 'express';
import { logger } from '@/logger';
import { getSignInResponse, getUserByEmail } from '@/utils';
import { sendError } from '@/errors';
import { email, Joi } from '@/validation';
import { getEventById, getUserProfile } from '@/utils/event';

export const signInCodeSchema = Joi.object({
  email: email.required(),
  eventId: Joi.string().required(),
  code: Joi.string(),
  expectedRole: Joi.string().required(),
  redirectUrl: Joi.string(),
}).meta({ className: 'SignInCodeSchema' });

export const signInCodeHandler: RequestHandler<
  {},
  {},
  {
    email: string;
    eventId: string;
    code?: string;
    expectedRole: string;
    redirectUrl?: string;
  }
> = async (req, res) => {
  const { email, eventId, code, expectedRole, redirectUrl } = req.body;
  logger.debug(`Sign in with code: ${email} ${eventId} ${expectedRole}`);

  const user = await getUserByEmail(email);

  if (!user) {
    return sendError(res, 'invalid-email-password');
  }

  if (user.disabled) {
    return sendError(res, 'disabled-user');
  }

  const userMetadata = await getUserProfile(user.email);

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

  switch (event.status) {
    case 'upcoming':
      if (
        new Date(event.date).getTime() >
        new Date().getTime() + 15 * 60 * 1000
      )
        return sendError(res, 'event-is-not-started');
      break;
    case 'completed':
      return sendError(res, 'event-is-already-finished');
    case 'expired':
      return sendError(res, 'event-is-expired');
    default:
      break;
  }

  const isUserGrantedForEvent = userMetadata.isActiveHost;

  if (!isUserGrantedForEvent) {
    return sendError(res, 'invalid-game-permission');
  }

  const signInTokens = await getSignInResponse({
    userId: user.id,
    checkMFA: true,
    eventRole: expectedRole,
  });

  if (redirectUrl) {
    const navigateTo = `${redirectUrl}?eventId=${eventId}&roomCode=${code}&accessToken=${signInTokens.session?.accessToken}&refreshToken=${signInTokens.session?.refreshToken}`;
    return res.status(301).send(navigateTo);
  }

  return res.send(signInTokens);
};
