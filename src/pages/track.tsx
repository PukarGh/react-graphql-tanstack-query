import React from "react";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import TrackDetail from "../components/track-detail";
import { useQuery } from "@tanstack/react-query";
import { getTrack } from "../api/tracks";

const Track = () => {
  const { trackId } = useParams();
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["track", trackId],
    queryFn: () => getTrack(trackId ?? ""),
  });

  const track = data?.track;

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={track}>
        <TrackDetail track={track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
