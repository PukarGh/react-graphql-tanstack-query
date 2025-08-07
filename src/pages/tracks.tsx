import React from "react";
import { Layout, QueryResult } from "../components";
import { useQuery } from "@tanstack/react-query";
import TrackCard from "../containers/track-card";
import { getTracks } from "../api/tracks";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tracks"],
    queryFn: getTracks,
  });
  const tracks = data?.tracksForHome;

  return (
    <Layout grid>
      <QueryResult loading={isLoading} data={tracks} error={error}>
        {tracks?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
