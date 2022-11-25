import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export interface DateRange {
  startDate: null | Dayjs;
  endDate: null | Dayjs;
  handleSetDateRange: (isStart: boolean, date: Dayjs) => void;
}

export default function useDateRange(daysRange = 3): DateRange {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  function handleSetDateRange(isStart: boolean, date: Dayjs): void {
    if (isStart) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }

  useEffect(() => {
    const today = dayjs();
    const daysAgo = dayjs().subtract(3, "day");

    setStartDate(daysAgo);
    setEndDate(today);
  }, [daysRange]);

  return { startDate, endDate, handleSetDateRange };
}
