import { useEffect, useState } from "react";
import dayjs from "dayjs";

export interface CurrentWeekRange {
  start: null | string;
  end: null | string;
  handleSetRange: (isStart: boolean, date: string) => void;
}
export default function useDateRange(daysRange=3): CurrentWeekRange {
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);

  function handleSetRange(isStart: boolean, date: string): void {
    if (isStart) {
      setStart(date);
    } else {
      setEnd(date);
    }
  }

  useEffect(() => {
    const dateTemplate = "YYYY-MM-DD";
    const currentDate = new Date();
    const today = dayjs(currentDate).format(dateTemplate);
    const daysAgo = dayjs(currentDate)
      .subtract(daysRange, "day")
      .format(dateTemplate);

    setStart(daysAgo);
    setEnd(today);
  }, [daysRange]);

  return {start, end, handleSetRange};
}
