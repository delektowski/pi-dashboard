import React from "react";
import { Col, Divider, Row } from "antd";
import "./App.css";
import AllMeasurements from "./components/alllMeasurements";
import RangeDate from "./components/rangeDate";

const App = () => (
  <div className="container">
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
  </div>
);

export default App;
