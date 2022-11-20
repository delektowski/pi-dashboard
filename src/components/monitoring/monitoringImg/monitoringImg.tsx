import React from "react";
import { Typography } from "antd";
import { useQuery } from "@apollo/client";
import { GET_LAST_PHOTO } from "../../../helpers/gql-measurements";
import { LastPhotoModel } from "../../../models/last-photo.model";
import dayjs from "dayjs";
import styles from "./Monitoring-img.module.css";

const { Text } = Typography;

const MonitoringImg = () => {
  const { loading, error, data } = useQuery<{
    lastPhoto: LastPhotoModel[];
  }>(GET_LAST_PHOTO, {
    fetchPolicy: "network-only",
    pollInterval: 10000,
  });

  return (
    <>
      {error && <p>Something went wrong</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <figure className={styles.container}>
          <img
            className={styles.monitoringImg}
            src={`${process.env.REACT_APP_URL}/img-${data?.lastPhoto[0].title}.jpg`}
            alt="my-logo"
          />
          <figcaption style={{ textAlign: "center" }}>
            <Text type="secondary">
              {dayjs(data?.lastPhoto[0].date).format("DD-MM-YY / HH:mm:ss")}
            </Text>
          </figcaption>
        </figure>
      )}
    </>
  );
};

export default MonitoringImg;
