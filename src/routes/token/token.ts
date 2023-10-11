import { sendError } from '@/errors';
import {
  getNewOrUpdateCurrentSession,
  getUserByRefreshToken,
  gqlSdk,
} from '@/utils';
import { Joi, refreshToken } from '@/validation';
import { RequestHandler } from 'express';

export const tokenSchema = Joi.object({
  refreshToken,
}).meta({ className: 'TokenSchema' });

export const tokenHandler: RequestHandler<
  {},
  {},
  { refreshToken: string; eventRole?: string }
> = async (req, res) => {
  const { refreshToken, eventRole } = req.body;

  const user = await getUserByRefreshToken(refreshToken);

  if (!user) {
    return sendError(res, 'invalid-refresh-token');
  }

  if (user.disabled) {
    return sendError(res, 'disabled-user');
  }

  // 1 in 10 request will delete expired refresh tokens
  // TODO: CRONJOB in the future.
  if (Math.random() < 0.1) {
    // no await
    gqlSdk.deleteExpiredRefreshTokens();
  }

  const session = await getNewOrUpdateCurrentSession({
    user,
    eventRole,
    currentRefreshToken: refreshToken,
  });

  return res.send(session);
};
