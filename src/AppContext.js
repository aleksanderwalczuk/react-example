import { useState, useMemo, createContext } from "react";

const globalState = {
  counter: null
};

const State = () => {
  const [userName, setUserName] = useState("John Smith");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);
};
const AppContext = createContext(globalState);

export default AppContext;
