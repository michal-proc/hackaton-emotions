import React, { useReducer, useEffect } from "react";
import reducer, { initialState } from "../reducers/mainReducer";
import apiRoute from "../api/apiConfig";

export const Context = React.createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getInterests = async () => {
        const result = await fetch(apiRoute('/interests'));
        const json = await result.json();
        if (json.success)
          dispatch({type: 'SET_INTERESTS', payload: json.data})
    }

    getInterests();
  }, []); 

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default AppContextProvider;
