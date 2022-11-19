import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LAST_PHOTO } from "../../helpers/gql-measurements";
import { LastPhotoModel } from "../../models/last-photo.model";
import dayjs from "dayjs";

const MonitoringImg = () => {
  const { loading, error, data } = useQuery<{
    lastPhoto: LastPhotoModel[];
  }>(GET_LAST_PHOTO, {
    fetchPolicy: "network-only",
    pollInterval: 10000
  });

  return (
    <div>
      {error && <p>Something went wrong</p>}
      {loading ? <p>Loading...</p> :
        <figure>
          <img src={`${process.env.REACT_APP_URL}/img-${data?.lastPhoto[0].title}.jpg`} alt="my-logo" />
          <figcaption
            style={{ textAlign: "center" }}>{dayjs(data?.lastPhoto[0].date).format("YY-MM-DD / HH:MM:ss")}</figcaption>
        </figure>}
    </div>
  );
};

export default MonitoringImg;
