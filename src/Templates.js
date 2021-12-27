import { useState, useEffect, useContext } from "react";
import AppContext from "./context/AppContext";

const SayHelloWithData = ({ counterData }) => {
  const globalState = useContext(AppContext);

  const { start, end } = counterData;

  const startDate = new Date(start.timestamp).toISOString();
  const saveDate = new Date(end.timestamp).toISOString();

  return (
    <div>
      <h2>You've started a counter before!</h2>
      <div>
        <p>Last counter value was: {end.value}</p>
        <p>Started on: {saveDate}</p>
        <p>Finished: {startDate}</p>
        <p>timeDiff = {end.timestamp - start.timestamp}</p>
      </div>
      <button onClick={globalState.clearLastCount}>Clear counter data</button>
    </div>
  );
};

export const SayHello = () => {
  const globalState = useContext(AppContext);

  return (
    <div>
      <p>Hello Stranger!</p>
      {globalState.lastCounter ? (
        <SayHelloWithData counterData={globalState.lastCounter} />
      ) : null}
    </div>
  );
};

export const SayBye = () => <p>Bye Stranger!</p>;

export const CountingElement = () => {
  const [counter, setCounter] = useState(0);

  const globalState = useContext(AppContext);

  useEffect(() => {
    const countInterval = setTimeout(() => setCounter(counter + 1), 1000);
    globalState.saveCountValue("start", null);
    return () => {
      globalState.saveCountValue("end", counter);
      clearTimeout(countInterval);
    };
  }, [counter]);

  return <p>Current count is: {counter}</p>;
};
