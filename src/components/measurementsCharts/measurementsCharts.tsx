import React from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import { Col, Row } from "antd";
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
            <RangeDate />
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
