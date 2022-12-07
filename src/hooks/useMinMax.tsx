import { useEffect, useState } from "react";
import {Measurement} from "../models/measurement.model";

export default function useMinMax(data:  Measurement[], measureType: string): number[] {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (data.length !== 0) {
      const measures = [...data].sort(
        (a, b) => (a[measureType] as number) - (b[measureType] as number)
      );
      const measureMin = measures[0][measureType] as number;
      const measureMax = measures[measures.length - 1][measureType] as number;
      setMin(measureMin);
      setMax(measureMax);
    }
  }, [data, measureType]);

  return [min, max];
}
