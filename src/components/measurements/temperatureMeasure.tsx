import React, { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";
import { Measurement } from "../../models/measurement.model";
import dayjs from "dayjs";
import { Divider } from "antd";

const TemperatureMeasure = ({
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
        return { date: formatDate, temperature: measurement.temperature };
      }
    );

    setData(data);
  }, [rangeMeasurements]);
  const config = {
    data,
    height: 400,
    xField: "date",
    yField: "temperature",
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
        fill: "l(270) 0:#ffffff 0.5:#EC3953 1:#E60526",
      };
    },
    color: "#ffa3b0",
  };
  return (
    <>
      <Divider orientation="center">Temperature</Divider>
      <Area {...config} />
    </>
  );
};
export default TemperatureMeasure;
