import React from "react";
import { Col, Divider, Grid, Row } from "antd";
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

const MonitoringPlayer: React.FC<Omit<DateHmsRange, "endDateHms">> = ({
  startDateHms,
  handleSetDateHmsRange,
  handleReset,
}) => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  function onReset() {
    handleReset();
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
      <Row justify="center" gutter={xs ? [30, 0] : [64, 0]}>
        <Col>
          <FastBackwardOutlined
            style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
            onClick={() => handleHour(false)}
          />
          <p style={{ margin: 0 }}>-1h</p>
        </Col>
        <Col>
          <StepBackwardOutlined
            style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
            onClick={() => handleMinute(false)}
          />
          <p style={{ margin: 0 }}>-1m</p>
        </Col>
        <Col>
          <CaretLeftOutlined
            style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
            onClick={() => handleSeconds(false)}
          />
          <p style={{ margin: 0 }}>-15s</p>
        </Col>
        <Col>
          <CloseCircleOutlined
            style={{
              fontSize: `${xs ? "1.4rem" : "1.2rem"}`,
              marginRight: `${xs ? "0rem" : "0.4rem"}`,
            }}
            onClick={onReset}
          />
        </Col>
        <Col>
          <CaretRightOutlined
            style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
            onClick={() => handleSeconds(true)}
          />
          <p style={{ margin: 0 }}>+15s</p>
        </Col>
        <Col>
          <StepForwardOutlined
            style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
            onClick={() => handleMinute(true)}
          />
          <p style={{ margin: 0 }}>+1m</p>
        </Col>
        <Col>
          <FastForwardOutlined
            style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
            onClick={() => handleHour(true)}
          />
          <p style={{ margin: 0 }}>+1h</p>
        </Col>
      </Row>

      <Divider />
    </>
  );
};

export default MonitoringPlayer;
