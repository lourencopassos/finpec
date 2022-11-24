import React, { createContext, useReducer } from "react";
import { IInitialState, initialState, reducer } from "./reducer";

export const AppContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
