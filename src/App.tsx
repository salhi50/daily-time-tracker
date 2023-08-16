import React from "react";
import {
  Actions,
  Reducer,
  State,
  daysReducer,
  initializer,
} from "./daysReducer";
import { DAYS_KEY, getNewDay, isToday } from "./days";

// Components
import Greeting from "./components/Greeting";
import Today from "./components/Today";
import DayController from "./components/DayController";
import DayContext from "./dayContext";
import TimeRangeAccordian from "./components/TimeRangeAccordian";

const App: React.FC = () => {
  const [days, dispatch] = React.useReducer<Reducer, State>(
    daysReducer,
    [],
    initializer
  );
  const [selectedDay, setSelectedDay] = React.useState(() => {
    const lastDay = days[days.length - 1];
    if (lastDay) return lastDay;
    return null;
  });

  React.useEffect(() => {
    const lastDay = days[days.length - 1];
    if (days.length === 0 || (lastDay && !isToday(lastDay.date))) {
      const newDay = getNewDay();
      setSelectedDay(newDay);
      dispatch({ type: Actions.ADD, payload: newDay });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(DAYS_KEY, JSON.stringify(days));
  }, [days]);

  return (
    <>
      <div className="container my-4" style={{ maxWidth: 700 }}>
        <Greeting />
        <Today />
        <hr className="mb-4" />
        {selectedDay && (
          <DayContext.Provider
            value={{ days, selectedDay, setSelectedDay, dispatch }}
          >
            <DayController />
            {selectedDay.hours.map((_, index) => (
              <TimeRangeAccordian index={index} key={index} />
            ))}
          </DayContext.Provider>
        )}
      </div>
    </>
  );
};

export default App;
