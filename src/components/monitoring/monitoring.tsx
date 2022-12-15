import React, { useState } from "react";
import { DateHmsRangeContext } from "../../context/dateHmsRangeContext";
import { Card, Col, Grid, Row } from "antd";
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
              <Card bordered={false}>
                  <RangeDateHms setIsOldImg={setIsOldImg} />
              </Card>
          </Col>
        </Row>

        {!xs && endDateHms && (
          <Card bordered={false}>
            <MonitoringPlayer
              handleReset={handleReset}
              isOldImg={isOldImg}
              setIsOldImg={setIsOldImg}
            />
          </Card>
        )}
        <Row justify={"center"} gutter={[16, 0]}>
          {endDateHms && (
            <Col span={xs ? 24 : 8}>
              <MonitoringOldImg />
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
              {xs ? (
                <MonitoringImg />
              ) : (

                  <MonitoringImg />
               
              )}
            </Col>
          )}
        </Row>
      </DateHmsRangeContext.Provider>
    </>
  );
};

export default Monitoring;
