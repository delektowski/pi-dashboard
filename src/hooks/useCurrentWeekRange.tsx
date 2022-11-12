import { useEffect, useState } from "react";
import dayjs from "dayjs";

export interface CurrentWeekRange {
  start: null | string;
  end: null | string;
  handleSetStart: (isStart: boolean, date: string) => void;
}
export default function useCurrentWeekRange(): CurrentWeekRange {
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);

  function handleSetStart(isStart: boolean, date: string): void {
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
    const sevenDaysAgo = dayjs(currentDate)
      .subtract(17, "day")
      .format(dateTemplate);

    setStart(sevenDaysAgo);
    setEnd(today);
  }, []);

  return {start, end, handleSetStart};
}
