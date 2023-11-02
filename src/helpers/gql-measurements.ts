import { gql } from "@apollo/client";

export const GET_MEASUREMENTS = gql`
  query AllMeasurements {
    allMeasurements {
      temperature
      pressure
      humidity
      measurementDate
    }
  }
`;

export const GET_MEASUREMENTS_RANGE = gql`
  query AllMeasurements(
    $start: String
    $end: String
    $measurementTable: String
  ) {
    dateRangeMeasurements(
      start: $start
      end: $end
      measurementTable: $measurementTable
    ) {
      temperature
      pressure
      humidity
      measurementDate
    }
  }
`;

export const GET_LAST_PHOTO = gql`
  query LastPhoto {
    lastPhoto {
      date
      title
    }
  }
`;

export const GET_OLD_PHOTO_FROM_RANGE = gql`
  query oldPhotoFromRange($start: String, $end: String) {
    oldPhotoFromRange(start: $start, end: $end) {
      date
      title
    }
  }
`;
