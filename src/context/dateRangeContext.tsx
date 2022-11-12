import React from "react";

interface DateRangeInterface {
  start: string | null;
  end: string | null;
  handleSetStart: ((isStart: boolean, date: string) => void)

}

export const DateRangeContext = React.createContext({} as DateRangeInterface);
