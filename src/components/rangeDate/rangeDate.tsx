import { Col, Grid, Row, Typography } from "antd";
import React, { useContext } from "react";
import DatePicker from "../../helpers/datePickerDayJs";
import { DateRangeContext } from "../../context/dateRangeContext";
import dayjs from "dayjs";

const RangeDate = () => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();
  const { Text } = Typography;
  const dateTemplate = "YYYY-MM-DD";
  const dateRange = useContext(DateRangeContext);
  const onChange: any["onChange"] = (isStart: boolean, dateString: any) => {
    dateRange.handleSetRange(
      isStart,
      dayjs(dateString.$d).format(dateTemplate)
    );
  };
  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <Text mark>From</Text>
        </Col>
        <Col span={xs ? 9 : 2}>
          <DatePicker
            value={dayjs(dateRange.start)}
            onChange={(e) => onChange(true, e)}
            placeholder={"From"}
          />
        </Col>
        <Text mark>To</Text>
        <Col span={xs ? 9 : 2}>
          <DatePicker
            value={dayjs(dateRange.end)}
            onChange={(e) => onChange(false, e)}
            placeholder={"To"}
          />
        </Col>
      </Row>
    </>
  );
};
export default RangeDate;
