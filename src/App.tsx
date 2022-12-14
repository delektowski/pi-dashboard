import React from "react";
import "./App.css";
import MeasurementsCharts from "./components/measurementsCharts/measurementsCharts";
import Monitoring from "./components/monitoring/monitoring";
import useDateRange from "./hooks/useDateRange";

const App = () => {
  const { startDate, endDate, handleSetDateRange } = useDateRange();
  return (
    <div className="container">
      <Monitoring handleSetDateRange={handleSetDateRange} />

      <MeasurementsCharts
        startDate={startDate}
        endDate={endDate}
        handleSetDateRange={handleSetDateRange}
      />
    </div>
  );
};

export default App;
