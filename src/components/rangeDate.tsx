// import type {DatePickerProps} from 'antd';
import { Col, Row, Space } from "antd";
import React from "react";
import DatePicker from "./datePickerDayJs";

const onChange: any["onChange"] = (date: any, dateString: any) => {
  console.log(date, dateString);
};

const RangeDate: React.FC = () => (
  <>
    <Row justify="center">
      <Col span={6} >
        <Space direction="vertical" size={2} >
          <DatePicker onChange={onChange} placeholder={"From"} />
        </Space>
      </Col>
      <Col span={6} >
        <Space direction="vertical" size={2}>
          <DatePicker onChange={onChange} placeholder={"To"} />
        </Space>
      </Col>
    </Row>
  </>
);
export default RangeDate;
