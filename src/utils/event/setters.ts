import { client } from '@/utils';
import gql from 'graphql-tag';
import { SelfHostedTeamInterface } from './getters';

export interface InsertTeamRequestQueryVariables {
  teamData: {
    name: string;
    eventId: string;
  };
}

export const InsertTeamRequestDocument = () => gql`
  mutation MyMutation($teamData: teams_insert_input!) {
    createdTeam: insert_teams_one(object: $teamData) {
      id
    }
  }
`;

export interface InsertTeamPlayerRequestQueryVariables {
  player: {
    name: string;
    teamId: string;
  };
}

export const InsertPlayerRequestDocument = () => gql`
  mutation MyMutation($playerData: players_insert_input!) {
    createdPlayer: insert_players_one(object: $playerData) {
      id
    }
  }
`;

export const InsertTeamPlayer = async ({
  eventId,
  team,
  name,
}: {
  eventId: string;
  team?: SelfHostedTeamInterface;
  name: string;
}): Promise<void> => {
  console.log(team);
  const teamId: string =
    team?.id ||
    (await client
      .request(InsertTeamRequestDocument(), {
        teamData: {
          name: 'Team 1',
          index: 0,
          eventId,
        },
      })
      .then((res) => res.createdTeam.id as string));
  console.log(teamId);
  const res = await client.request(InsertPlayerRequestDocument(), {
    playerData: {
      name,
      teamId,
      index: team ? team.players.length : 0,
    },
  });

  return res['createdPlayer'];
};
