import React from "react";
import { Reducer, State, daysReducer, initializer } from "./daysReducer";

const App: React.FC = () => {
  const [days, dispatch] = React.useReducer<Reducer, State>(
    daysReducer,
    [],
    initializer
  );
  return <></>;
};

export default App;
