import React from "react";

interface DateRangeInterface {
  start: string;
  end: string;
}

export const DateRangeContext = React.createContext({} as DateRangeInterface);
