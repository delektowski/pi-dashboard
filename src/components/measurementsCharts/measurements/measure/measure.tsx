import React, { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";
import { Measurement } from "../../../../models/measurement.model";
import dayjs from "dayjs";
import { Divider } from "antd";
import { ChartColorModel } from "../../../../models/chart-color.model";
import useMinMax from "../../../../hooks/useMinMax";

const Measure = ({
  rangeMeasurements,
  measureType,
  title,
  chartColor,
}: {
  rangeMeasurements: Measurement[];
  measureType: string;
  title: string;
  chartColor: ChartColorModel;
}) => {
  const [data, setData] = useState<Measurement[]>([]);
  const [min, max] = useMinMax(data, measureType);

  useEffect(() => {
    const data: Measurement[] = rangeMeasurements.map(
      (measurement: Measurement) => {
        const formatDate = dayjs(measurement.measurementDate).format(
          "DD.MM/HH:MM"
        );
        return {
          date: formatDate,
          [measureType]: Number(
            (measurement[measureType] as number).toFixed(1)
          ),
        };
      }
    );
    setData(data);
  }, [rangeMeasurements, measureType]);
  const config = {
    data,
    height: 200,
    xField: "date",
    yField: measureType,
    xAxis: {
      range: [0, 0.98],
      tickCount: 10,
    },
    yAxis: {
      range: [0, 1],
      tickCount: 6,
      min,
      max,
    },
    meta: {
      yField: {
        range: [0.5, 0],
      },
    },

    areaStyle: () => {
      return {
        fill: `l(270) 0:#ffffff 0.5:${chartColor.mid} 1:${chartColor.height}`,
      };
    },
    color: `${chartColor.topLine}`,
  };
  return (
    <>
      <Divider orientation="center">{title}</Divider>
      <Area {...config} />
    </>
  );
};
export default Measure;
