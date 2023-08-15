import { nanoid } from "nanoid";

// used to read/write into the localstorage
export const DAYS_KEY = "days";

export interface TimeRange {
  content: string;
}

export interface Day {
  hours: TimeRange[];
  id: string;
  date: Date;
}

export type GetNewDayFunction = () => Day;
export type GetDefaultHoursArrayFunction = () => Day["hours"];

export const getDefaultHoursArray: GetDefaultHoursArrayFunction = () => {
  const hours: Day["hours"] = [];
  for (let i = 0; i < 24; i++) {
    hours.push({ content: "" });
  }
  return hours;
};

export const getNewDay: GetNewDayFunction = () => {
  return {
    hours: getDefaultHoursArray(),
    id: nanoid(),
    date: new Date(),
  };
};
