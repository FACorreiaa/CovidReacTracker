import { eachDayOfInterval } from "date-fns";

export const getNumberOfDays = (valueFromDate: Date, valueToDate: Date) => {
  return eachDayOfInterval({
    start: valueFromDate,
    end: valueToDate,
  });
};
