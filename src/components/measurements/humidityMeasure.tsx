import React, { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";
import { Measurement } from "../../models/measurement.model";
import dayjs from "dayjs";
import { Divider } from "antd";

const HumidityMeasure = ({
  rangeMeasurements,
}: {
  rangeMeasurements: Measurement[];
}) => {
  const [data, setData] = useState<Measurement[]>([]);
  useEffect(() => {
    const data: Measurement[] = rangeMeasurements.map(
      (measurement: Measurement) => {
        const formatDate = dayjs(measurement.measurementDate).format(
          "DD.MM.YY  HH:MM"
        );
        return { date: formatDate, humidity: measurement.humidity };
      }
    );
    setData(data);
  }, [rangeMeasurements]);
  const config = {
    data,
    height: 400,
    xField: "date",
    yField: "humidity",
    xAxis: {
      range: [0, 0.98],
      tickCount: 10,
    },
    yAxis: {
      range: [0, 1],
      tickCount: 18,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#1864AB 1:#1864AB",
      };
    },
    color: "#87a2be",
  };
  return (
    <>
      <Divider orientation="center">Humidity</Divider>
      <Area {...config} />
    </>
  );
};
export default HumidityMeasure;
