import { client } from '@/utils';
import gql from 'graphql-tag';

export const GetEventByIdRequestDocument = gql`
  query ($eventId: uuid!) {
    events_by_pk(id: $eventId) {
      id
      gameType
    }
  }
`;

export interface GetEventByIdRequestQueryVariables {
  eventId: string;
}

export interface Code {
  role: string;
  code: string;
}

export interface Event {
  id: string;
  gameType: string;
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
      avatarId
      city
      country
      disabled
      email
      firstName
      gamePermissions {
        game
        id
        permission
        userMetadataId
      }
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
