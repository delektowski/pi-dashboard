import React from "react";
import { Divider } from "antd";
import "./App.css";
import MeasurementsCharts from "./components/measurementsCharts/measurementsCharts";
import Monitoring from "./components/monitoring/monitoring";
import useDateRange from "./hooks/useDateRange";

const App = () => {
    const { startDate, endDate, handleSetDateRange } = useDateRange();
  return (
    <div className="container">
      <Monitoring  handleSetDateRange={handleSetDateRange}/>
      <Divider></Divider>
      <MeasurementsCharts startDate={startDate} endDate={endDate} handleSetDateRange={handleSetDateRange} />
    </div>
  );
};

export default App;
