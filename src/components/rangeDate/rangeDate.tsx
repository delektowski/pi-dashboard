// import type {DatePickerProps} from 'antd';
import { Col, Row, Space } from "antd";
import React, { useContext } from "react";
import DatePicker from "../../helpers/datePickerDayJs";
import { DateRangeContext } from "../../context/dateRangeContext";
import dayjs from "dayjs";

const RangeDate = () => {
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
      <Row justify="center">
        <Col span={6}>
          <Space direction="vertical" size={2}>
            <DatePicker
              value={dayjs(dateRange.start)}
              onChange={(e) => onChange(true, e)}
              placeholder={"From"}
            />
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="vertical" size={2}>
            <DatePicker
              value={dayjs(dateRange.end)}
              onChange={(e) => onChange(false, e)}
              placeholder={"To"}
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};
export default RangeDate;
