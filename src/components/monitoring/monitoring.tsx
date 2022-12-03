import React, { useState } from "react";
import { DateHmsRangeContext } from "../../context/dateHmsRangeContext";
import { Col, Divider, Grid, Row } from "antd";
import RangeDateHms from "./rangeDateHms/rangeDateHms";
import useDateHmsRange from "../../hooks/useDateHmsRange";
import MonitoringOldImg from "./monitoringOldImg/monitoringOldImg";
import MonitoringImg from "./monitoringImg/monitoringImg";
import MonitoringPlayer from "./monitoringPlayer/monitoringPlayer";
import { Dayjs } from "dayjs";

const Monitoring = ({
  handleSetDateRange,
}: {
  handleSetDateRange: (isStart: boolean, date: Dayjs) => void;
}) => {
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
          handleSetDateRange,
        }}
      >
        <Row justify="center">
          <Col span={24}>
            <RangeDateHms setIsOldImg={setIsOldImg} />
          </Col>
        </Row>
        <Divider />
        {!xs && endDateHms && (
          <MonitoringPlayer handleReset={handleReset} isOldImg={isOldImg} setIsOldImg={setIsOldImg} />
        )}
        <Row justify={"center"} gutter={[16, 16]}>
          {endDateHms && (
            <Col span={xs ? 24 : 8}>
              <MonitoringOldImg setIsOldImg={setIsOldImg} />
            </Col>
          )}
          {xs && endDateHms && (
            <MonitoringPlayer
              handleReset={handleReset}
              isOldImg={isOldImg}
              setIsOldImg={setIsOldImg}
            />
          )}
          {!isOldImg && (
            <Col span={xs ? 24 : 8}>
              <MonitoringImg />
            </Col>
          )}
        </Row>
      </DateHmsRangeContext.Provider>
    </>
  );
};

export default Monitoring;
