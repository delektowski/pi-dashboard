// import type {DatePickerProps} from 'antd';
import { Col, Row, Space } from "antd";
import React, { useContext } from "react";
import DatePicker from "./datePickerDayJs";
import { DateRangeContext } from "../context/dateRangeContext";
import dayjs from "dayjs";

const onChange: any["onChange"] = (date: any, dateString: any) => {
  console.log(date, dateString);
};

const RangeDate: React.FC = () => {
  const dateRange = useContext(DateRangeContext);
  return (
    <>
      <Row justify="center">
        <Col span={6}>
          <Space direction="vertical" size={2}>
            <DatePicker
              onChange={onChange}
              placeholder={"From"}
              defaultValue={dayjs(dateRange.start)}
            />
          </Space>
        </Col>
        <Col span={6}>
          <Space direction="vertical" size={2}>
            <DatePicker
              onChange={onChange}
              placeholder={"To"}
              defaultValue={dayjs(dateRange.end)}
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};
export default RangeDate;
