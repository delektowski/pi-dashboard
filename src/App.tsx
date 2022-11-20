import React from "react";
import { Divider } from "antd";
import "./App.css";
import MeasurementsCharts from "./components/measurementsCharts/measurementsCharts";
import Monitoring from "./components/monitoring/monitoring";

const App = () => {
  return (
    <div className="container">
      <Monitoring />
      <Divider></Divider>
      <MeasurementsCharts />
    </div>
  );
};

export default App;
