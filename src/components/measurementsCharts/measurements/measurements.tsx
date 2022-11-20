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

const Measurements = (): JSX.Element => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const dateRange = useContext(DateRangeContext);
  const { loading, error, data } = useQuery<{
    dateRangeMeasurements: Measurement[];
  }>(GET_MEASUREMENTS_RANGE, {
    variables: { start: dateRange.startDate, end: dateRange.endDate },
  });

  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <>
      {data?.dateRangeMeasurements && (
        <Row justify="center">
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={data.dateRangeMeasurements}
              measureType={MeasureTypeEnum.TEMPERATURE}
              title="Temperature"
              chartColor={temperatureChartColor}
            />
          </Col>
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={data.dateRangeMeasurements}
              measureType={MeasureTypeEnum.HUMIDITY}
              title="Humidity"
              chartColor={humidityChartColor}
            />
          </Col>
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={data.dateRangeMeasurements}
              measureType={MeasureTypeEnum.PRESSURE}
              title="Pressure"
              chartColor={pressureChartColor}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Measurements;
