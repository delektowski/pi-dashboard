import React from "react";

interface DateRangeInterface {
  startDate: string | null;
  endDate: string | null;
  handleSetDateRange: (isStart: boolean, date: string) => void;
}

export const DateRangeContext = React.createContext({} as DateRangeInterface);
