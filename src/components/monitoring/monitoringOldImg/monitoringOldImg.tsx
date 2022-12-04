import React, { useContext, useEffect, useState } from "react";
import { Typography } from "antd";
import { useQuery } from "@apollo/client";
import { GET_OLD_PHOTO_FROM_RANGE } from "../../../helpers/gql-measurements";
import { LastPhotoModel } from "../../../models/last-photo.model";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import styles from "./Monitoring-img.module.css";
import { DateHmsRangeContext } from "../../../context/dateHmsRangeContext";
import { SetIsOldImageModel } from "../../../models/set-is-old-image.model";
import SpinnerCentered from "../../spinner/spinner";

const { Text } = Typography;

const MonitoringOldImg = ({ setIsOldImg }: SetIsOldImageModel) => {
  const {
    startDateHms,
    endDateHms,
    handleSetDateRange,
    handleSetDateHmsRange,
  } = useContext(DateHmsRangeContext);

  const [image, setImage] = useState<undefined | string>(undefined);
  const [date, setDate] = useState<undefined | string>("");
  const [prevImage, setPrevImage] = useState<undefined | string>(undefined);

  const [minutesToSubtract, setMinutesToSubtract] = useState(0);
  const { loading, error, data } = useQuery<{
    oldPhotoFromRange: LastPhotoModel[];
  }>(GET_OLD_PHOTO_FROM_RANGE, {
    variables: {
      start: startDateHms,
      end: endDateHms,
    },
  });

  function isOldPhoto(
    data: { oldPhotoFromRange: LastPhotoModel[] } | undefined
  ) {
    return !(data?.oldPhotoFromRange.length === 0 || data === undefined);
  }

  useEffect(() => {
    const img = new Image();

    function getOlderPhoto() {
      function setOlderDate(
        timeAmount: number,
        timeUnit: ManipulateType
      ): Dayjs {
        setMinutesToSubtract((prev) => prev + timeAmount);
        return dayjs().subtract(minutesToSubtract, timeUnit);
      }

      handleSetDateHmsRange(setOlderDate(5, "second"));
      handleSetDateRange(true, setOlderDate(5, "second"));
      handleSetDateRange(false, setOlderDate(5, "second"));
    }

    if (data?.oldPhotoFromRange.length && data?.oldPhotoFromRange.length > 0) {
      img.src = `${process.env.REACT_APP_URL}/img-${data?.oldPhotoFromRange[0].title}.jpg`;
      img.onload = () => {
        setPrevImage(img.src);
        setDate(data?.oldPhotoFromRange[0].date);
      };
    }
    if (!image) {
      getOlderPhoto();
    }
  }, [data, setIsOldImg]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (prevImage) {
      setImage(prevImage);
    }
  }, [prevImage]);
  return (
    <>
      {error && <p>{`Error! ${error.message}`}</p>}
      {loading && !image && <SpinnerCentered />}
      {(isOldPhoto(data) || prevImage) && (
        <figure className={styles.container}>
          <img
            className={styles.monitoringImg}
            src={image !== prevImage ? image : prevImage}
            alt=""
          />
          <figcaption style={{ textAlign: "center" }}>
            <Text italic>{dayjs(date).format("DD-MM-YY / HH:mm:ss")}</Text>
          </figcaption>
        </figure>
      )}
    </>
  );
};

export default MonitoringOldImg;
