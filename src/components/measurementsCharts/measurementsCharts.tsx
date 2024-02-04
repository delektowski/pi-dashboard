import React from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import { Card, Col, Divider, Grid, Row, Typography } from "antd";
import RangeDate from "./rangeDate/rangeDate";
import Measurements from "./measurements/measurements";
import { Dayjs } from "dayjs";
import ExternalTemp from "./measurements/externalTemp";

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
  const { Text } = Typography;

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

        <Row>
          <Col span={24}>
            <Divider orientation="center">
              <Text mark>First floor</Text>
            </Divider>
            <Measurements measurementTable={"measurements"} />
            <Divider orientation="center">
              <Text mark>Ground floor</Text>
            </Divider>
            <Measurements measurementTable={"measurements1"} />
            <Divider orientation="center">
              <Text mark>Temperature and pressure outside</Text>
            </Divider>
            <ExternalTemp />
          </Col>
        </Row>
      </DateRangeContext.Provider>
    </>
  );
};

export default MeasurementsCharts;
