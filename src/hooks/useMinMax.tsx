import { useEffect, useState } from "react";

export default function useMinMax(data: any, measureType: string): number[] {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (data.length !== 0) {
      const measures = [...data].sort(
        (a, b) => (a[measureType] as number) - (b[measureType] as number)
      );
      const measureMin = measures[0][measureType];
      const measureMax = measures[measures.length - 1][measureType];
      setMin(measureMin);
      setMax(measureMax);
    }
  }, [data, measureType]);

  return [min, max];
}
