import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export interface DateHmsRange {
  startDateHms: null | Dayjs;
  endDateHms: null | Dayjs;
  handleSetDateHmsRange: (date: Dayjs) => void;
}

export default function useDateHmsRange(): DateHmsRange {
  const [startDateHms, setStartDateHms] = useState<Dayjs>(dayjs());
  const [endDateHms, setEndDateHms] = useState<Dayjs | null>(null);

  function handleSetDateHmsRange(date: Dayjs) {
    const endDate = dayjs(date).add(10, "minute");
    setStartDateHms(date);
    setEndDateHms(endDate);
  }

  return { startDateHms, endDateHms, handleSetDateHmsRange };
}
