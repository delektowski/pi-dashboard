import React from "react";
import dayjs from "dayjs";
import { LastPhotoModel } from "../models/last-photo.model";

export default function useDateTimeFormat(
  data: { [key: string]: LastPhotoModel[] } | undefined,
  dateOldImg: string | undefined
) {
  const date = dateOldImg
    ? dayjs(dateOldImg).format("DD.MM.YY / HH:mm:ss")
    : dayjs(data?.lastPhoto[0].date).format("DD.MM.YY / HH:mm:ss");
  const formatDate = date.split("/");
  return {
    dateTimeFormat: formatDate.map((item, index) => (
      <p
        key={item}
        style={{
          margin: 0,
          fontSize: index !== 0 ? "0.7rem" : "0.8rem",
          lineHeight: 1.2,
        }}
      >
        {item}
      </p>
    )),
  };
}
