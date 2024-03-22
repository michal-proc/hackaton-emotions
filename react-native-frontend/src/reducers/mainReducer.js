const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };
    case "EDIT_USER_FIELD":
      return {
        ...state,
        user: {
          ...state.user,
          [payload.field]: payload.value,
        },
      };
    case 'SET_INTERESTS': 
      return {
        ...state, 
        interests: payload
      }
    case 'SET_USER_INTERESTS':
      return {
        ...state,
        user: {
          ...state.user,
          user_interests: payload
        }
      }
    default:
      console.log(new Error("Context: Action type not provided."));
      return state;
  }
};

export const initialState = {
  hello: "Hello from ContextProvider!",
  user: {
    user_interests: []
  }
};

export default reducer;
