import React, { useState } from "react";
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

  const [isOldImg, setIsOldImg] = useState(false);
  return (
    <>
      <DateHmsRangeContext.Provider
        value={{
          startDateHms,
          endDateHms,
          handleSetDateHmsRange,
        }}
      >
        <Row justify="center">
          <Col span={24}>
            <RangeDateHms />
          </Col>
        </Row>
        <Divider />
        {!xs && endDateHms && (
          <MonitoringPlayer
            startDateHms={startDateHms}
            handleSetDateHmsRange={handleSetDateHmsRange}
            handleReset={handleReset}
            isOldImg={isOldImg}
          />
        )}
        <Row justify={"center"} gutter={[16, 16]}>
          {endDateHms && (
            <Col span={xs ? 24 : 8}>
              <MonitoringOldImg setIsOldImg={setIsOldImg} />
            </Col>
          )}
          {xs && endDateHms && (
            <MonitoringPlayer
              startDateHms={startDateHms}
              handleSetDateHmsRange={handleSetDateHmsRange}
              handleReset={handleReset}
              isOldImg={isOldImg}
              setIsOldImg={setIsOldImg}
            />
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
