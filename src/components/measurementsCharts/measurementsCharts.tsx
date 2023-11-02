import React from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import {Card, Col, Divider, Grid, Row} from "antd";
import RangeDate from "./rangeDate/rangeDate";
import Measurements from "./measurements/measurements";
import { Dayjs } from "dayjs";

const MeasurementsCharts = ({
  startDate,
  endDate,
  handleSetDateRange,
}: {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  handleSetDateRange: (isStart: boolean, date: Dayjs) => void;
}) => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  return (
    <>
      <DateRangeContext.Provider
        value={{
          startDate,
          endDate,
          handleSetDateRange,
        }}
      >
        <Row>
          <Col span={24}>
            {xs ? (
              <Card bordered={false}>
                <RangeDate />
              </Card>
            ) : (
              <RangeDate />
            )}
          </Col>
        </Row>

        <Row >
          <Col span={24}>
              <Divider orientation="center">First floor</Divider>
            <Measurements measurementTable={"measurements"} />
              <Divider orientation="center">Ground floor</Divider>
            <Measurements measurementTable={"measurements1"} />
          </Col>
        </Row>
      </DateRangeContext.Provider>
    </>
  );
};

export default MeasurementsCharts;
