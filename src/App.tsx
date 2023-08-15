import React from "react";
import {
  Actions,
  Reducer,
  State,
  daysReducer,
  initializer,
} from "./daysReducer";
import { isToday } from "./days";

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

  return <></>;
};

export default App;
