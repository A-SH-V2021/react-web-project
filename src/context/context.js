import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

import { tourData } from "../context/tourData";
const AppContext = React.createContext();

const initialState = {
  data: tourData,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteHandle = (id) => {
    return dispatch({ type: "REMOVE", id });
  };
  return (
    <AppContext.Provider value={{ ...state, deleteHandle }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
