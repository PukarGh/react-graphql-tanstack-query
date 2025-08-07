import request from "graphql-request";
import { gql } from "../types/gql";

const API_URL = "https://odyssey-lift-off-server.herokuapp.com/";

export const getTracks = async () => {
  const QUERY = gql(`
query TracksForHome {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id  
      name
      photo
    }
  }
}
`);

  return request(API_URL, QUERY);
};

export const getTrack = async (id: string) => {
  const QUERY = gql(`
query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    description
    numberOfViews
    modules {
      id
      title
      length
      content
      videoUrl
    }
  }
}
`);

  return request(API_URL, QUERY, { trackId: id });
};

export const incrementView = async (id: string) => {
  const MUTATION = gql(`
  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`);

  return request(API_URL, MUTATION, { incrementTrackViewsId: id });
};
