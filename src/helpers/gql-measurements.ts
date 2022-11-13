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
  query AllMeasurements($start: String, $end: String) {
    dateRangeMeasurements(start: $start, end: $end) {
      temperature
      pressure
      humidity
      measurementDate
    }
  }
`;