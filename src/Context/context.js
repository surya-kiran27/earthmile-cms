import React, { useReducer } from "react";
import {
  AuthReducer,
  initialState,
  EarthMilesReducer,
  initialStateEarthMiles,
} from "./reducer";
export const AuthStateContext = React.createContext();
export const AuthDispatchContext = React.createContext();
const EarthMilesContext = React.createContext();
const EarthMilesDispatchContext = React.createContext();
export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}
export function useEarthMilesState() {
  const context = React.useContext(EarthMilesContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}
export function useEarthMilesDispatch() {
  const context = React.useContext(EarthMilesDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}
export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const EarthMilesProvider = ({ children }) => {
  const [data, dispatch] = useReducer(
    EarthMilesReducer,
    initialStateEarthMiles
  );

  return (
    <EarthMilesContext.Provider value={data}>
      <EarthMilesDispatchContext.Provider value={dispatch}>
        {children}
      </EarthMilesDispatchContext.Provider>
    </EarthMilesContext.Provider>
  );
};
