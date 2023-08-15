import { DAYS_KEY, Day, getNewDay } from "./days";

export type State = Day[];

export enum Actions {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export type AddAction = {
  type: Actions.ADD;
};

export type UpdateAction = {
  type: Actions.UPDATE;
  payload: Pick<Day, "id"> & {
    update: Partial<Omit<Day, "id" | "date">>;
  };
};

export type DeleteAction = {
  type: Actions.DELETE;
  payload: Pick<Day, "id">;
};

export type Action = AddAction | UpdateAction | DeleteAction;

export type Reducer = (state: State, action: Action) => State;

export const daysReducer: Reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD:
      return [...state, getNewDay()];
    case Actions.UPDATE:
      return state.map((day) =>
        day.id === action.payload.id
          ? { ...day, ...action.payload.update }
          : day
      );
    case Actions.DELETE:
      return state.filter((day) => day.id !== action.payload.id);
    default:
      return state;
  }
};

export type Initializer = () => State;

export const initializer: Initializer = () => {
  const loc = localStorage.getItem(DAYS_KEY);
  return loc ? JSON.parse(loc) : [];
};
