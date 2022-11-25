import React from "react";
import {Dayjs} from "dayjs";

interface DateHmsRangeInterface {
  startDateHms: Dayjs| null;
  endDateHms: Dayjs| null;
  handleSetDateHmsRange: ((date: Dayjs) => void);
  handleSetDateRange:   ((isStart:boolean, date: Dayjs) => void);


}

export const DateHmsRangeContext = React.createContext({} as DateHmsRangeInterface);
