import { useQuery } from "@apollo/client";
import {
  GET_EXTERNAL_TEMP_RANGE,
  GET_MEASUREMENTS_RANGE,
} from "../../../helpers/gql-measurements";
import { Measurement } from "../../../models/measurement.model";
import React, { useContext } from "react";
import { DateRangeContext } from "../../../context/dateRangeContext";
import Measure from "./measure/measure";
import { MeasureTypeEnum } from "../../../models/measure-type.enum";
import {
  pressureChartColor,
  temperatureChartColor,
} from "../../../helpers/charts-colors";
import { Col, Grid, Row } from "antd";
import SpinnerCentered from "../../spinner/spinner";

const ExternalTemp = (): JSX.Element => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const dateRange = useContext(DateRangeContext);
  const {
    loading: loadingExternal,
    error: errorExternal,
    data: dataExternal,
  } = useQuery<{
    [key: string]: Measurement[];
  }>(GET_EXTERNAL_TEMP_RANGE, {
    variables: {
      start: dateRange.startDate,
      end: dateRange.endDate,
    },
  });

  const {
    loading: loadingMeasurements,
    error: errorMeasurements,
    data: dataMeasurements,
  } = useQuery<{
    [key: string]: Measurement[];
  }>(GET_MEASUREMENTS_RANGE, {
    variables: {
      start: dateRange.startDate,
      end: dateRange.endDate,
      measurementTable: "measurements1",
    },
  });

  return (
    <>
      <Row justify="center">
        {errorExternal && <p>{`Error! ${errorExternal.message}`}</p>}
        {loadingExternal && <SpinnerCentered />}
        {dataExternal?.dateRangeExternalTemp && (
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={dataExternal.dateRangeExternalTemp}
              measureType={MeasureTypeEnum.TEMPERATURE}
              title="Temperature"
              chartColor={temperatureChartColor}
              tickCount={7}
            />
          </Col>
        )}
        {errorMeasurements && <p>{`Error! ${errorMeasurements.message}`}</p>}
        {loadingMeasurements && <SpinnerCentered />}
        {dataMeasurements?.dateRangeMeasurements && (
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={dataMeasurements.dateRangeMeasurements}
              measureType={MeasureTypeEnum.PRESSURE}
              title="Pressure"
              chartColor={pressureChartColor}
              tickCount={7}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default ExternalTemp;
