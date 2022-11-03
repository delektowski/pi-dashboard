import React from "react";
import { Col, Divider, Row } from "antd";
import "./App.css";
import AllMeasurements from "./components/alllMeasurements";
import RangeDate from "./components/rangeDate";
import { DateRangeContext } from "./context/dateRangeContext";

const App = () => (
  <div className="container">
    <DateRangeContext.Provider
      value={{
        start: "2022-11-01",
        end: "2022-11-03",
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
  </div>
);

export default App;
