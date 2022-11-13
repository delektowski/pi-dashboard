import React from "react";
import {Card, Col, Row} from "antd";
import "./App.css";
import Measurements from "./components/measurements/measurements";
import RangeDate from "./components/rangeDate/rangeDate";
import { DateRangeContext } from "./context/dateRangeContext";
import useDateRange from "./hooks/useDateRange";

const App = () => {
  const { start, end, handleSetRange } = useDateRange();

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
          <Card>
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
          </Card>
        </DateRangeContext.Provider>
      )}
    </div>
  );
};

export default App;
