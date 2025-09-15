import { RequestHandler } from 'express';
import { logger } from '@/logger';
import { getSignInResponse, insertUser } from '@/utils';
import { sendError } from '@/errors';
import { Joi } from '@/validation';
import { getEventById } from '@/utils/event';
import { InsertTeamPlayer } from '@/utils/event/setters';

const SH_MAX_PLAYERS_NUMBER = 8;
const STQ_MAX_PLAYERS_NUMBER = 10000;

export const signInSelfHostedSchema = Joi.object({
  name: Joi.string().required(),
  eventId: Joi.string().required(),
  code: Joi.string(),
  expectedRole: Joi.string().required(),
  teamId: Joi.string().optional(),
}).meta({ className: 'SignInSelfHostedSchema' });

export const signInSelfHostedHandler: RequestHandler<
  {},
  {},
  {
    name: string;
    eventId: string;
    code: string;
    expectedRole: string;
    teamId?: string;
  }
> = async (req, res) => {
  const { name, eventId, code, expectedRole, teamId } = req.body;
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
    return sendError(res, 'sh-event-is-already-finished');
  }

  if (event.gameInformationSketchWars?.isStarted) {
    return sendError(res, 'sh-event-is-already-started');
  }

  const selectedTeam =
    event.teams?.find((team) => team.id === teamId) || event.teams?.[0];

  if (expectedRole === 'leadPlayer' && selectedTeam?.players?.length) {
    return sendError(res, 'lead-player-already-logged-in');
  }

  if (expectedRole === 'player' && !event.teams.length) {
    return sendError(res, 'no-lead-player');
  }

  const slotsLimit =
    event.eventType === 'SELF_HOSTED'
      ? event.gameInformationSketchWars &&
        !event.gameInformationSketchWars.isLeadPlayerPlay
        ? SH_MAX_PLAYERS_NUMBER + 1
        : SH_MAX_PLAYERS_NUMBER
      : STQ_MAX_PLAYERS_NUMBER;

  if (selectedTeam?.players?.length >= slotsLimit) {
    return sendError(res, 'no-slots');
  }

  if (
    selectedTeam?.players?.find(
      (player) => player.name.toLowerCase().trim() === name.toLowerCase().trim()
    )
  ) {
    return teamId ? res.send(event) : sendError(res, 'name-already-in-use');
  }

  const { id: playerId } = await InsertTeamPlayer({
    eventId,
    team: selectedTeam,
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
