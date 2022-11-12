import { useQuery } from "@apollo/client";
import { GET_MEASUREMENTS_RANGE } from "../../GQLQueries/get-measurements";
import { Measurement } from "../../models/measurement.model";
import TemperatureMeasure from "./temperatureMeasure";
import { useContext } from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import HumidityMeasure from "./humidityMeasure";
import PressureMeasure from "./pressureMeasure";

const Measurements = (): JSX.Element => {
  const dateRange = useContext(DateRangeContext);
  const { loading, error, data } = useQuery<{
    dateRangeMeasurements: Measurement[];
  }>(GET_MEASUREMENTS_RANGE, {
    variables: { start: dateRange.start, end: dateRange.end },
  });

  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <>
      {data?.dateRangeMeasurements && (
        <>
          <TemperatureMeasure rangeMeasurements={data.dateRangeMeasurements} />
          <HumidityMeasure rangeMeasurements={data.dateRangeMeasurements} />
          <PressureMeasure rangeMeasurements={data.dateRangeMeasurements} />
        </>
      )}
    </>
  );
};

export default Measurements;
