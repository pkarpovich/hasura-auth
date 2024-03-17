import { RequestHandler } from 'express';
import { logger } from '@/logger';
import { getSignInResponse, insertUser } from '@/utils';
import { sendError } from '@/errors';
import { Joi } from '@/validation';
import { getEventById } from '@/utils/event';
import { InsertTeamPlayer } from '@/utils/event/setters';

const MAX_PLAYERS_NUMBER = 8;

export const signInSelfHostedSchema = Joi.object({
  name: Joi.string().required(),
  eventId: Joi.string().required(),
  code: Joi.string(),
  expectedRole: Joi.string().required(),
}).meta({ className: 'SignInSelfHostedSchema' });

export const signInSelfHostedHandler: RequestHandler<
  {},
  {},
  {
    name: string;
    eventId: string;
    code: string;
    expectedRole: string;
  }
> = async (req, res) => {
  const { name, eventId, code, expectedRole } = req.body;
  logger.debug(`Sign in self-hosted: ${name} ${eventId} ${expectedRole}`);

  if (expectedRole !== 'leadPlayer' && expectedRole !== 'player') {
    return sendError(res, 'invalid-code');
  }

  const event = await getEventById({
    // we create one code for self-hosted game with host role
    expectedRole: 'host',
    eventId,
    code,
  });

  if (!event) {
    return sendError(res, 'invalid-event-id');
  }

  if (event.codes.length === 0) {
    return sendError(res, 'invalid-code');
  }

  if (event.status === 'completed') {
    return sendError(res, 'event-is-already-finished');
  }

  if (expectedRole === 'leadPlayer' && event.teams?.[0]?.players?.length) {
    return sendError(res, 'lead-player-already-logged-in');
  }

  if (expectedRole === 'player' && !event.teams.length) {
    return sendError(res, 'no-lead-player');
  }

  if (event.teams?.[0]?.players?.length >= MAX_PLAYERS_NUMBER) {
    return sendError(res, 'no-slots');
  }

  if (
    event.teams?.[0]?.players?.find(
      (player) => player.name.toLowerCase().trim() === name.toLowerCase().trim()
    )
  ) {
    return sendError(res, 'name-already-in-use');
  }

  const { id: playerId } = await InsertTeamPlayer({
    eventId,
    team: event.teams?.[0],
    name,
  });

  // restructure user roles to be inserted in GraphQL mutation
  const userRoles = [{ role: 'anonymous' }];

  // insert user
  const user = await insertUser({
    displayName: name,
    locale: 'en',
    roles: {
      data: userRoles,
    },
    defaultRole: 'anonymous',
    isAnonymous: true,
    metadata: {
      playerId,
    },
  });

  const signInTokens = await getSignInResponse({
    userId: user.id,
    checkMFA: true,
    eventRole: expectedRole,
  });

  return res.send(signInTokens);
};
