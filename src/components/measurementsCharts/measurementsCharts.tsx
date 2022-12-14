import React from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import { Card, Col, Grid, Row } from "antd";
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
        <Row>
          <Col span={24}>
            <Measurements />
          </Col>
        </Row>
      </DateRangeContext.Provider>
    </>
  );
};

export default MeasurementsCharts;
