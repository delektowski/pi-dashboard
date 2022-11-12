import React from "react";
import { Col, Row } from "antd";
import "./App.css";
import Measurements from "./components/measurements/measurements";
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

          <Row>
            <Col span={24}>
              <Measurements />
            </Col>
          </Row>
        </DateRangeContext.Provider>
      )}
    </div>
  );
};

export default App;
