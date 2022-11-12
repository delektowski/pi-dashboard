import React from "react";
import { Col, Divider, Row } from "antd";
import "./App.css";
import AllMeasurements from "./components/alllMeasurements";
import RangeDate from "./components/rangeDate";
import { DateRangeContext } from "./context/dateRangeContext";
import useCurrentWeekRange from "./hooks/useCurrentWeekRange";

const App = () => {
  const { start, end, handleSetStart } = useCurrentWeekRange();

  return (
    <div className="container">
      {start && end && (
        <DateRangeContext.Provider
          value={{
            start,
            end,
            handleSetStart,
          }}
        >
          <Row justify="center">
            <Col span={12}>
              <RangeDate />
            </Col>
          </Row>
          <Divider orientation="center">Temperature</Divider>
          <Row>
            <Col span={24}>
              <AllMeasurements />
            </Col>
          </Row>
        </DateRangeContext.Provider>
      )}
    </div>
  );
};

export default App;
