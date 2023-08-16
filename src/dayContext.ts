import { createContext } from "react";
import { Day } from "./days";
import { Action } from "./daysReducer";

export type DayContextValue = {
  selectedDay: Day | null;
  days: Day[];
  setSelectedDay: React.Dispatch<React.SetStateAction<Day | null>>;
  dispatch: React.Dispatch<Action>;
};

const DayContext = createContext<DayContextValue>({
  selectedDay: null,
  days: [],
  setSelectedDay: () => {},
  dispatch: () => {},
});

export default DayContext;
