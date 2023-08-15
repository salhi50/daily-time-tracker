import React from "react";
import {
  Actions,
  Reducer,
  State,
  daysReducer,
  initializer,
} from "./daysReducer";
import { DAYS_KEY, Day, getNewDay, isToday } from "./days";
import DayController from "./components/DayController";

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
      {selectedDay && (
        <DayController
          days={days}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      )}
    </>
  );
};

export default App;
