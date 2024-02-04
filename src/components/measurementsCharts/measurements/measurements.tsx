import { useQuery } from "@apollo/client";
import { GET_MEASUREMENTS_RANGE } from "../../../helpers/gql-measurements";
import { Measurement } from "../../../models/measurement.model";
import React, { useContext } from "react";
import { DateRangeContext } from "../../../context/dateRangeContext";
import Measure from "./measure/measure";
import { MeasureTypeEnum } from "../../../models/measure-type.enum";
import {
  humidityChartColor,
  pressureChartColor,
  temperatureChartColor,
} from "../../../helpers/charts-colors";
import { Col, Grid, Row } from "antd";
import SpinnerCentered from "../../spinner/spinner";
import { Tables } from "../../../models/tables-enum";

interface MeasurementsProps {
  measurementTable: string;
}

const Measurements = ({ measurementTable }: MeasurementsProps): JSX.Element => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const dateRange = useContext(DateRangeContext);
  const { loading, error, data } = useQuery<{
    [key: string]: Measurement[];
  }>(GET_MEASUREMENTS_RANGE, {
    variables: {
      start: dateRange.startDate,
      end: dateRange.endDate,
      measurementTable,
    },
  });

  return (
    <>
      {error && <p>{`Error! ${error.message}`}</p>}
      {loading && <SpinnerCentered />}
      {data?.dateRangeMeasurements && (
        <Row justify="center">
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={data.dateRangeMeasurements}
              measureType={MeasureTypeEnum.TEMPERATURE}
              title="Temperature"
              chartColor={temperatureChartColor}
              tickCount={7}
            />
          </Col>
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={data.dateRangeMeasurements}
              measureType={MeasureTypeEnum.HUMIDITY}
              title="Humidity"
              chartColor={humidityChartColor}
              tickCount={10}
            />
          </Col>
          {measurementTable === Tables.MEASUREMENTS && (
            <Col span={xs ? 24 : 8}>
              <Measure
                rangeMeasurements={data.dateRangeMeasurements}
                measureType={MeasureTypeEnum.PRESSURE}
                title="Pressure"
                chartColor={pressureChartColor}
                tickCount={6}
              />
            </Col>
          )}
        </Row>
      )}
    </>
  );
};

export default Measurements;
