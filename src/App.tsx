import React from "react";
import {
  Actions,
  Reducer,
  State,
  daysReducer,
  initializer,
} from "./daysReducer";
import { DAYS_KEY, isToday } from "./days";

const App: React.FC = () => {
  const [days, dispatch] = React.useReducer<Reducer, State>(
    daysReducer,
    [],
    initializer
  );

  React.useEffect(() => {
    const lastDay = days[days.length - 1];
    if (days.length === 0 || (lastDay && !isToday(lastDay.date))) {
      dispatch({ type: Actions.ADD });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(DAYS_KEY, JSON.stringify(days));
  }, [days]);

  return <></>;
};

export default App;
