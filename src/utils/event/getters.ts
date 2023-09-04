import { client } from '@/utils';
import gql from 'graphql-tag';

export const GetEventByIdRequestDocument = gql`
  query ($eventId: uuid!, $code: String!, $expectedRole: String!) {
    events_by_pk(id: $eventId) {
      id
      gameType
      codes(
        where: {
          _and: [{ code: { _eq: $code } }, { role: { _eq: $expectedRole } }]
        }
      ) {
        code
        role
      }
    }
  }
`;

export interface GetEventByIdRequestQueryVariables {
  eventId: string;
  code: string;
  expectedRole: string;
}

export interface Code {
  role: string;
  code: string;
}

export interface Event {
  id: string;
  gameType: string;
  codes: Code[];
}

export const getEventById = async (
  variables: GetEventByIdRequestQueryVariables
): Promise<Event> => {
  const resp = await client.request(GetEventByIdRequestDocument, variables);

  return resp['events_by_pk'];
};

const GetUserByEmailRequestDocument = gql`
  query ($email: String!) {
    userMetadata(where: { email: { _eq: $email } }) {
      email
      gamePermissions {
        permission
        game
      }
    }
  }
`;

export interface GamePermissions {
  permission: string;
  game: string;
}

export interface UserMetadata {
  email: string;
  gamePermissions: GamePermissions[];
}

export const getUserProfile = async (email: string): Promise<UserMetadata> => {
  const resp = await client.request(GetUserByEmailRequestDocument, { email });

  return resp['userMetadata'][0];
};
