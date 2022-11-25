import { Col, Grid, Row, Typography } from "antd";
import React, { useContext } from "react";
import DatePicker from "../../../helpers/datePickerDayJs";
import { DateRangeContext } from "../../../context/dateRangeContext";
import dayjs, { Dayjs } from "dayjs";

const RangeDate = () => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();
  const { Text } = Typography;
  const { startDate, endDate, handleSetDateRange } =
    useContext(DateRangeContext);
  const onChange: any["onChange"] = (isStart: boolean, date: Dayjs) => {
    handleSetDateRange(isStart, date);
  };
  return (
    <>
      <Row justify="center" align="middle" gutter={24}>
        <Col span={xs ? 9 : 2}>
          <DatePicker
            value={dayjs(startDate)}
            onChange={(e) => onChange(true, e)}
            placeholder={"From"}
          />
        </Col>
        <Text mark>Measurements</Text>
        <Col span={xs ? 9 : 2}>
          <DatePicker
            value={dayjs(endDate)}
            onChange={(e) => onChange(false, e)}
            placeholder={"To"}
          />
        </Col>
      </Row>
    </>
  );
};
export default RangeDate;
