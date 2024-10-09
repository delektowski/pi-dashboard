import React from "react";
import { Typography } from "antd";
import { useQuery } from "@apollo/client";
import { GET_LAST_PHOTO } from "../../../helpers/gql-measurements";
import { LastPhotoModel } from "../../../models/last-photo.model";
import styles from "./Monitoring-img.module.css";
import SpinnerCentered from "../../spinner/spinner";
import useDateTimeFormat from "../../../hooks/useDateTimeFormat";

const { Text } = Typography;

const MonitoringImg = () => {
  const { loading, error, data } = useQuery<{
    ["lastPhoto"]: LastPhotoModel[];
  }>(GET_LAST_PHOTO, {
    fetchPolicy: "network-only",
    pollInterval: 10000,
  });
  const { dateTimeFormat } = useDateTimeFormat(data, undefined);

  const lastPhotoTitle = data?.lastPhoto[0]?.title || ""
  return (
    <>
      {error && <p>{`Error! ${error.message}`}</p>}
      {loading ? (
        <SpinnerCentered />
      ) :  (
        <figure className={styles.container}>
          <img
            className={styles.monitoringImg}
            src={`${process.env.REACT_APP_URL}/img-${lastPhotoTitle}.jpg`}
            alt="my-logo"
          />
          <figcaption className={styles.imgCaption}>
            <Text type="secondary">{dateTimeFormat.map((item) => item)}</Text>
          </figcaption>
        </figure>
      )}
    </>
  );
};

export default MonitoringImg;
