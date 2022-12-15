import React, { useEffect, useState } from "react";
import { Area } from "@ant-design/plots";
import { Card, Divider, Grid } from "antd";
import { Measurement } from "../../../../models/measurement.model";
import dayjs from "dayjs";
import { ChartColorModel } from "../../../../models/chart-color.model";
import useMinMax from "../../../../hooks/useMinMax";

const Measure = ({
  rangeMeasurements,
  measureType,
  title,
  chartColor,
  tickCount,
}: {
  rangeMeasurements: Measurement[];
  measureType: string;
  title: string;
  chartColor: ChartColorModel;
  tickCount: number;
}) => {
  const [data, setData] = useState<Measurement[]>([]);
  const { min, max } = useMinMax(data, measureType);
  const { useBreakpoint } = Grid;
  const { xs } = useBreakpoint();

  useEffect(() => {
    const data: Measurement[] = rangeMeasurements.map(
      (measurement: Measurement) => {
        const formatDate = dayjs(measurement.measurementDate).format(
          "DD.MM.YY/HH:MM"
        );
        return {
          date: formatDate,
          [measureType]: Number(
            (measurement[measureType] as number).toFixed(0)
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
      range: [0, 0.99],
      tickCount: 10,
      label: {
        formatter: (val: string) => {
          return val.replace("/", "\n");
        },
      },
    },
    yAxis: {
      range: [0, 1],
      tickCount,
      min,
      max,
      label: {
        formatter: (val: string) => {
          const space = '     '
          return `${Number(val).toFixed(1)}${space}`;
        },
      },
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
      {xs ? (
        <>
          <Divider orientation="center">{title}</Divider>
          <Area {...config} />
        </>
      ) : (
        <Card
          title={title}
          bordered={false}
          headStyle={{ textAlign: "center" }}
        >
          <Area {...config} />
        </Card>
      )}
    </>
  );
};
export default Measure;
