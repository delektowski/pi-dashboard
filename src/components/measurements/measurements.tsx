import { useQuery } from "@apollo/client";
import { GET_MEASUREMENTS_RANGE } from "../../GQLQueries/get-measurements";
import { Measurement } from "../../models/measurement.model";
import { useContext } from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import Measure from "./measure/measure";
import {MeasureTypeEnum} from "../../models/measure-type.enum";
import {humidityChartColor, pressureChartColor, temperatureChartColor} from "../../helpers/charts-colors";

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
          <Measure
            rangeMeasurements={data.dateRangeMeasurements}
            measureType={MeasureTypeEnum.TEMPERATURE}
            title="Temperature"
           chartColor={temperatureChartColor}/>
          <Measure
            rangeMeasurements={data.dateRangeMeasurements}
            measureType={MeasureTypeEnum.HUMIDITY}
            title="Humidity"
            chartColor={humidityChartColor}
          />
          <Measure
            rangeMeasurements={data.dateRangeMeasurements}
            measureType={MeasureTypeEnum.PRESSURE}
            title="Pressure"
            chartColor={pressureChartColor}
          />
        </>
      )}
    </>
  );
};

export default Measurements;
