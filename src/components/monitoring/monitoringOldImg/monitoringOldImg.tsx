import React, { useContext } from "react";
import { Typography } from "antd";
import { useQuery } from "@apollo/client";
import { GET_OLD_PHOTO_FROM_RANGE } from "../../../helpers/gql-measurements";
import { LastPhotoModel } from "../../../models/last-photo.model";
import dayjs from "dayjs";
import styles from "./Monitoring-img.module.css";
import { DateHmsRangeContext } from "../../../context/dateHmsRangeContext";

const { Text } = Typography;

const MonitoringOldImg = () => {
  const dateHmsRange = useContext(DateHmsRangeContext);

  const { loading, error, data } = useQuery<{
    oldPhotoFromRange: LastPhotoModel[];
  }>(GET_OLD_PHOTO_FROM_RANGE, {
    variables: {
      start: dateHmsRange.startDateHms,
      end: dateHmsRange.endDateHms,
    },
  });

  function isOldPhoto(
    data: { oldPhotoFromRange: LastPhotoModel[] } | undefined
  ) {
    return !(data?.oldPhotoFromRange.length === 0 || data === undefined);
  }

  return (
    <>
      {error && <p>Something went wrong</p>}
      {loading || !isOldPhoto(data) ? (
        <p>Loading...</p>
      ) : (
        <figure className={styles.container}>
          <img
            className={styles.monitoringImg}
            src={`${process.env.REACT_APP_URL}/img-${data?.oldPhotoFromRange[0].title}.jpg`}
            alt="my-logo"
          />
          <figcaption style={{ textAlign: "center" }}>
            <Text italic>
              {dayjs(data?.oldPhotoFromRange[0].date).format(
                "DD-MM-YY / HH:mm:ss"
              )}
            </Text>
          </figcaption>
        </figure>
      )}
    </>
  );
};

export default MonitoringOldImg;
