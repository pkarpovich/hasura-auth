import { RequestHandler } from 'express';

import { getUser } from '@/utils';
import { getUserProfile } from '@/utils/event';

export const userHandler: RequestHandler = async (
  req,
  res
): Promise<unknown> => {
  const { userId, eventRole } = req.auth as RequestAuth;

  const user = await getUser({ userId });
  const userMetadata = await getUserProfile(user.email);

  return res.send({
    ...user,
    eventRole,
    userMetadata,
  });
};
