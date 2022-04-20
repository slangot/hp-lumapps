import { createContext, useReducer, useContext } from "react";
import dataReducer, { initialState } from "./dataReducer";

const DataContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const updateData = (data) => {
    dispatch({
      type: "UPDATE_DATA",
      payload: {
        data,
      },
    });
  };

  const cleanData = () => {
    dispatch({
      type: "CLEAN_DATA",
      payload: null,
    });
  };

  const value = {
    data: state.characterData,
    updateData,
    cleanData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useData must be used within DataContext");
  }

  return context;
};

export default useData;
