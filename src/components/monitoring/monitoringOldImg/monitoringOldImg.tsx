import React, { useContext, useEffect, useState } from "react";
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

  const [image, setImage] = useState<undefined | string>(undefined);
  const [date, setDate] = useState<undefined | string>("");
  const [prevImage, setPrevImage] = useState<undefined | string>(undefined);
  const { error, data } = useQuery<{
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

  useEffect(() => {
    const img = new Image();
    if (data?.oldPhotoFromRange.length && data?.oldPhotoFromRange.length > 0) {
      img.src = `${process.env.REACT_APP_URL}/img-${data?.oldPhotoFromRange[0].title}.jpg`;
      img.onload = () => {
        setPrevImage(img.src);
        setDate(data?.oldPhotoFromRange[0].date);
      };
    }
  }, [data]);

  useEffect(() => {
    if (prevImage) {
      setImage(prevImage);
    }
  }, [prevImage]);
  return (
    <>
      {error && <p>Something went wrong</p>}
      {(isOldPhoto(data) || prevImage) ? (
        <figure className={styles.container}>
          <img
            className={styles.monitoringImg}
            src={image !== prevImage ? image : prevImage}
            alt="my-logo"
          />
          <figcaption style={{ textAlign: "center" }}>
            <Text italic>{dayjs(date).format("DD-MM-YY / HH:mm:ss")}</Text>
          </figcaption>
        </figure>
      ) : <p>No image...</p>}
    </>
  );
};

export default MonitoringOldImg;
