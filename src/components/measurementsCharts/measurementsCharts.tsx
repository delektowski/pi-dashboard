import React from "react";
import { DateRangeContext } from "../../context/dateRangeContext";
import { Col, Row } from "antd";
import RangeDate from "./rangeDate/rangeDate";
import Measurements from "./measurements/measurements";
import useDateRange from "../../hooks/useDateRange";

const MeasurementsCharts = () => {
  const { startDate, endDate, handleSetDateRange } = useDateRange();
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
