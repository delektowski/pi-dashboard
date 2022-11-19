import React from "react";
import { Col, Divider, Grid, Row } from "antd";
import "./App.css";
import Measurements from "./components/measurements/measurements";
import RangeDate from "./components/rangeDate/rangeDate";
import { DateRangeContext } from "./context/dateRangeContext";
import useDateRange from "./hooks/useDateRange";
import MonitoringImg from "./components/monitoringImg/monitoringImg";

const App = () => {
  const { start, end, handleSetRange } = useDateRange();
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();


  return (
    <div className="container">
      {start && end && (
        <DateRangeContext.Provider
          value={{
            start,
            end,
            handleSetRange,
          }}
        >
          <Row justify="center">
            <Col span={xs ? 24 : 8}>
              <MonitoringImg />
            </Col>
          </Row>
          <Divider></Divider>
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
      )}
    </div>
  );
};

export default App;
