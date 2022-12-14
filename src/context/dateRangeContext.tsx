import React from "react";
import { Dayjs } from "dayjs";

interface DateRangeInterface {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  handleSetDateRange: (isStart: boolean, date: Dayjs) => void;
}

export const DateRangeContext = React.createContext({} as DateRangeInterface);
