import { Col, Grid, Row, Typography } from "antd";
import React, { useContext } from "react";
import DatePicker from "../../../helpers/datePickerDayJs";
import { Dayjs } from "dayjs";
import { DateHmsRangeContext } from "../../../context/dateHmsRangeContext";

const RangeDateHms = () => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();
  const { Text } = Typography;

  const dateRange = useContext(DateHmsRangeContext);
  const onChange: any["onChange"] = (date: Dayjs) => {
    dateRange.handleSetDateHmsRange(date);
  };
  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <Text mark>Date</Text>
        </Col>
        <Col span={xs ? 9 : 2}>
          <DatePicker
            value={dateRange.startDateHms}
            onChange={onChange}
            placeholder={"From"}
          />
        </Col>
        <Text mark>Time</Text>
        <Col span={xs ? 9 : 2}>
          <DatePicker
            picker="time"
            value={dateRange.startDateHms}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
};
export default RangeDateHms;
