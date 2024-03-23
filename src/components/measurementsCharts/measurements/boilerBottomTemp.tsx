import { useQuery } from "@apollo/client";
import { DATE_RANGE_FLOOR_BOILER_TEMPS } from "../../../helpers/gql-measurements";
import { Measurement } from "../../../models/measurement.model";
import React, { useContext } from "react";
import { DateRangeContext } from "../../../context/dateRangeContext";
import Measure from "./measure/measure";
import { temperatureChartColor } from "../../../helpers/charts-colors";
import { Col, Grid, Row } from "antd";
import SpinnerCentered from "../../spinner/spinner";

const BoilerBottomTemp = (): JSX.Element => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  const dateRange = useContext(DateRangeContext);
  const {
    loading: loadingBoilerBottom,
    error: errorBoilerBottom,
    data: dataBoilerBottom,
  } = useQuery<{
    [key: string]: Measurement[];
  }>(DATE_RANGE_FLOOR_BOILER_TEMPS, {
    variables: {
      start: dateRange.startDate,
      end: dateRange.endDate,
    },
  });

  return (
    <>
      <Row justify="center">
        {errorBoilerBottom && <p>{`Error! ${errorBoilerBottom.message}`}</p>}
        {loadingBoilerBottom && <SpinnerCentered />}
        {dataBoilerBottom?.dateRangeFloorBoilerTemps && (
          <Col span={xs ? 24 : 8}>
            <Measure
              rangeMeasurements={dataBoilerBottom.dateRangeFloorBoilerTemps}
              measureType={"temperature3"}
              title="Temperature"
              chartColor={temperatureChartColor}
              tickCount={7}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default BoilerBottomTemp;
