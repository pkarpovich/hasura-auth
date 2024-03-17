import { RequestHandler } from 'express';

import { getUser } from '@/utils';
import { getUserProfile } from '@/utils/event';

export const userHandler: RequestHandler = async (
  req,
  res
): Promise<unknown> => {
  const { userId, eventRole } = req.auth as RequestAuth;

  const user = await getUser({ userId });
  const userMetadata = user.email
    ? await getUserProfile(user.email)
    : undefined;

  return res.send({
    ...user,
    eventRole,
    userMetadata,
  });
};
