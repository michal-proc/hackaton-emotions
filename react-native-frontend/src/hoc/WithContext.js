import React, { useContext } from "react";
import { Context } from "./../context/AppContextProvider";

function WithContext(Component) {
  return function ContextRenderer(props) {
    const { state, dispatch } = useContext(Context);

    return <Component state={state} dispatch={dispatch} {...props} />;
  };
}

export default WithContext;
