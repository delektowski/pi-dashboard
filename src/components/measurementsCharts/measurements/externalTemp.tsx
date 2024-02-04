import { useQuery } from "@apollo/client";
import { GET_EXTERNAL_TEMP_RANGE } from "../../../helpers/gql-measurements";
import { Measurement } from "../../../models/measurement.model";
import React, { useContext } from "react";
import { DateRangeContext } from "../../../context/dateRangeContext";
import Measure from "./measure/measure";
import { MeasureTypeEnum } from "../../../models/measure-type.enum";
import { temperatureChartColor } from "../../../helpers/charts-colors";
import { Col, Grid, Row } from "antd";
import SpinnerCentered from "../../spinner/spinner";

const ExternalTemp = (): JSX.Element => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const dateRange = useContext(DateRangeContext);
  const { loading, error, data } = useQuery<{
    [key: string]: Measurement[];
  }>(GET_EXTERNAL_TEMP_RANGE, {
    variables: {
      start: dateRange.startDate,
      end: dateRange.endDate,
    },
  });

  return (
    <>
      {error && <p>{`Error! ${error.message}`}</p>}
      {loading && <SpinnerCentered />}
      {data?.dateRangeExternalTemp && (
        <Row justify="center">
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={data.dateRangeExternalTemp}
              measureType={MeasureTypeEnum.TEMPERATURE}
              title="Temperature"
              chartColor={temperatureChartColor}
              tickCount={7}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default ExternalTemp;
