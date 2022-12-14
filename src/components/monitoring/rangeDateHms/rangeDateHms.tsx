import { Button, Col, Grid, Row, Typography } from "antd";
import React, { useContext } from "react";
import DatePicker from "../../../helpers/datePickerDayJs";
import dayjs, { Dayjs } from "dayjs";
import { DateHmsRangeContext } from "../../../context/dateHmsRangeContext";
import { PlaySquareOutlined } from "@ant-design/icons";
import { SetIsOldImageModel } from "../../../models/set-is-old-image.model";

const RangeDateHms = ({ setIsOldImg }: SetIsOldImageModel) => {
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();
  const { Text } = Typography;

  const { startDateHms, handleSetDateHmsRange, handleSetDateRange } =
    useContext(DateHmsRangeContext);
  const onChange: any["onChange"] = (date: Dayjs) => {
    handleSetDateHmsRange(date);
    handleSetDateRange(true, date);
    handleSetDateRange(false, date);
  };

  const onPlayMonitoring: any["onClick"] = () => {
    handleSetDateHmsRange(dayjs(startDateHms).subtract(1, "minute"));
    handleSetDateRange(true, startDateHms as Dayjs);
    handleSetDateRange(false, startDateHms as Dayjs);
    setIsOldImg(true);
  };
  return (
    <>
      <Row justify="center" align="middle" gutter={[10, 10]}>
        <Col span={xs ? 9 : undefined}>
          <DatePicker
            value={startDateHms}
            onChange={onChange}
            placeholder={"From"}
            format={"DD.MM.YY"}
          />
        </Col>
        <Col>
          <Text mark>Image</Text>
        </Col>
        <Col span={xs ? 9 : undefined}>
          <DatePicker picker="time" value={startDateHms} onChange={onChange} />
        </Col>
        <Col>
          <Button
            onClick={onPlayMonitoring}
            type="primary"
            shape="round"
            icon={
              <PlaySquareOutlined
                style={{ fontSize: `${xs ? "1.4rem" : "1.2rem"}` }}
              />
            }
          />
        </Col>
      </Row>
    </>
  );
};
export default RangeDateHms;
