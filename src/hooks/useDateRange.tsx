import { useEffect, useState } from "react";
import dayjs from "dayjs";

export interface DateRange {
  startDate: null | string;
  endDate: null | string;
  handleSetDateRange: (isStart: boolean, date: string) => void;
}
export default function useDateRange(daysRange=3): DateRange {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  function handleSetDateRange(isStart: boolean, date: string): void {
    if (isStart) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }

  useEffect(() => {
    const dateTemplate = "YYYY-MM-DD";
    const currentDate = new Date();
    const today = dayjs(currentDate).format(dateTemplate);
    const daysAgo = dayjs(currentDate)
      .subtract(daysRange, "day")
      .format(dateTemplate);

    setStartDate(daysAgo);
    setEndDate(today);
  }, [daysRange]);

  return {startDate, endDate, handleSetDateRange};
}
