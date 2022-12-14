import React, { useContext } from "react";
import { Button, Col, Grid, Row } from "antd";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  CloseCircleOutlined,
  FastBackwardOutlined,
  FastForwardOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { DateHmsRange } from "../../../hooks/useDateHmsRange";
import dayjs from "dayjs";
import { DateHmsRangeContext } from "../../../context/dateHmsRangeContext";

const MonitoringPlayer = ({
  handleReset,
  isOldImg,
  setIsOldImg,
}: Omit<
  DateHmsRange,
  "endDateHms" | "startDateHms" | "handleSetDateHmsRange"
>) => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();
  const { startDateHms, handleSetDateHmsRange, handleSetDateRange } =
    useContext(DateHmsRangeContext);

  function onReset() {
    handleReset();
    handleSetDateRange(true, dayjs());
    handleSetDateRange(false, dayjs());
    if (typeof setIsOldImg === "function") {
      setIsOldImg(false);
    }
  }

  function handleMinute(isAdd: boolean) {
    isAdd
      ? handleSetDateHmsRange(dayjs(startDateHms).add(1, "minute"))
      : handleSetDateHmsRange(dayjs(startDateHms).subtract(1, "minute"));
  }

  function handleHour(isAdd: boolean) {
    isAdd
      ? handleSetDateHmsRange(dayjs(startDateHms).add(1, "hour"))
      : handleSetDateHmsRange(dayjs(startDateHms).subtract(1, "hour"));
  }

  function handleSeconds(isAdd: boolean) {
    isAdd
      ? handleSetDateHmsRange(dayjs(startDateHms).add(15, "second"))
      : handleSetDateHmsRange(dayjs(startDateHms).subtract(15, "second"));
  }

  return (
    <>
      {(isOldImg || !xs) && (
        <Row justify="center" gutter={xs ? [22, 0] : [64, 0]}>
          <Col>
            <Button
              type="primary"
              onClick={() => handleHour(false)}
              shape="circle"
              icon={
                <FastBackwardOutlined
                  style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
                />
              }
            />
            <p style={{ margin: 0 }}>-1h</p>
          </Col>
          <Col>
            <Button
              onClick={() => handleMinute(false)}
              type="primary"
              shape="circle"
              icon={
                <StepBackwardOutlined
                  style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
                />
              }
            />
            <p style={{ margin: 0 }}>-1m</p>
          </Col>
          <Col>
            <Button
              onClick={() => handleSeconds(false)}
              type="primary"
              shape="circle"
              icon={
                <CaretLeftOutlined
                  style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
                />
              }
            />
            <p style={{ margin: 0 }}>-15s</p>
          </Col>
          <Col>
            <Button
              type="primary"
              danger
              onClick={onReset}
              shape="circle"
              icon={
                <CloseCircleOutlined
                  style={{
                    fontSize: `${xs ? "1.4rem" : "1.2rem"}`,
                  }}
                />
              }
            />
          </Col>
          <Col>
            <Button
              onClick={() => handleSeconds(true)}
              type="primary"
              shape="circle"
              icon={
                <CaretRightOutlined
                  style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
                />
              }
            />
            <p style={{ margin: 0 }}>+15s</p>
          </Col>
          <Col>
            <Button
              onClick={() => handleMinute(true)}
              type="primary"
              shape="circle"
              icon={
                <StepForwardOutlined
                  style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
                />
              }
            />
            <p style={{ margin: 0 }}>+1m</p>
          </Col>
          <Col>
            <Button
              onClick={() => handleHour(true)}
              type="primary"
              shape="circle"
              icon={
                <FastForwardOutlined
                  style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
                />
              }
            />
            <p style={{ margin: 0 }}>+1h</p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MonitoringPlayer;
