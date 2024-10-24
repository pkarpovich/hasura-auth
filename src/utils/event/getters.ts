import { client } from '@/utils';
import gql from 'graphql-tag';

export const GetEventByIdRequestDocument = (
  variables: GetEventByIdRequestQueryVariables
) => gql`
  query ($eventId: uuid!, $expectedRole: String!${
    variables.code !== undefined ? ', $code: String!' : ''
  }) {
    events_by_pk(id: $eventId) {
      id
      gameType
      eventType
      date
      codes(
        where: {
          _and: [${
            variables.code !== undefined ? '{ code: { _eq: $code } }, ' : ''
          }{ role: { _eq: $expectedRole } }]
        }
      ) {
        code
        role
      }
      status
      teams {
        id
        players {
          id
          name
          index
        }
      }
      hosts {
        role
        status
      }
      gameInformationSketchWars {
        isStarted
      }
    }
  }
`;

export interface GetEventByIdRequestQueryVariables {
  eventId: string;
  code?: string;
  expectedRole: string;
}

export interface Code {
  role: string;
  code: string;
}

export interface PlayerInterface {
  id: string;
  name: string;
  index: number;
}

export interface SelfHostedTeamInterface {
  id: string;
  players: Array<PlayerInterface>;
}

export interface Event {
  id: string;
  gameType: string;
  eventType: string;
  date: string;
  codes: Code[];
  status: string;
  teams: Array<SelfHostedTeamInterface>;
  hosts: Array<{
    role: string;
    status: string;
  }>;
  gameInformationSketchWars: {
    isStarted: boolean;
  } | null;
}

export const getEventById = async (
  variables: GetEventByIdRequestQueryVariables
): Promise<Event> => {
  const resp = await client.request(
    GetEventByIdRequestDocument(variables),
    variables
  );

  return resp['events_by_pk'];
};

const GetUserByEmailRequestDocument = gql`
  query ($email: String!) {
    userMetadata(where: { email: { _eq: $email } }) {
      avatarId
      city
      country
      disabled
      email
      firstName
      id
      isActiveHost
      joinDate
      lastName
      phoneNumber
      role
      token
    }
  }
`;

export interface UserMetadata {
  email: string;
  isActiveHost: boolean;
}

export const getUserProfile = async (email: string): Promise<UserMetadata> => {
  const resp = await client.request(GetUserByEmailRequestDocument, { email });

  return resp['userMetadata'][0];
};
