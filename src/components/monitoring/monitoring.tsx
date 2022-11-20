import React from "react";
import { DateHmsRangeContext } from "../../context/dateHmsRangeContext";
import { Col, Divider, Grid, Row } from "antd";
import RangeDateHms from "./rangeDateHms/rangeDateHms";
import useDateHmsRange from "../../hooks/useDateHmsRange";
import MonitoringOldImg from "./monitoringOldImg/monitoringOldImg";
import MonitoringImg from "./monitoringImg/monitoringImg";
import MonitoringPlayer from "./monitoringPlayer/monitoringPlayer";

const Monitoring = () => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();
  const { startDateHms, endDateHms, handleSetDateHmsRange, handleReset } =
    useDateHmsRange();

  return (
    <>
      <DateHmsRangeContext.Provider
        value={{
          startDateHms,
          endDateHms,
          handleSetDateHmsRange,
        }}
      >
        <Row justify="center" gutter={[16, 16]}>
          <Col span={24}>
            <RangeDateHms />
          </Col>
        </Row>
        <Divider />
        {endDateHms && (
          <MonitoringPlayer
            startDateHms={startDateHms}
            handleSetDateHmsRange={handleSetDateHmsRange}
            handleReset={handleReset}
          />
        )}
        <Row justify={"center"} gutter={[16, 16]}>
          {endDateHms && (
            <Col span={xs ? 24 : 8}>
              <MonitoringOldImg />
            </Col>
          )}
          <Col span={xs ? 24 : 8}>
            <MonitoringImg />
          </Col>
        </Row>
      </DateHmsRangeContext.Provider>
    </>
  );
};

export default Monitoring;
