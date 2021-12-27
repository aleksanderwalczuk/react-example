import { useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { CLEAR_LAST_COUNT, SET_LAST_COUNT } from "./actions";

const AppState = ({ children }) => {
  const initialState = {
    loading: false,
    lastCounterValue: null,
    hiddenLastCounter: null
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const saveCountValue = (keyName, value) => {
    dispatch({
      type: SET_LAST_COUNT,
      payload: {
        [keyName]: {
          value,
          timestamp: Date.now()
        }
      }
    });
  };

  const clearLastCount = () =>
    dispatch({
      type: CLEAR_LAST_COUNT
    });
  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        lastCounter: state.lastCounter,
        hiddenLastCounter: state.hiddenLastCounter,
        saveCountValue,
        clearLastCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
