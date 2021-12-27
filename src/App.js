import "./styles.css";
import AppState from "./context/AppState";
import Wrapper from "./Wrapper";

export default function App() {
  return (
    <div className="App">
      <AppState>
        <h2>Start editing to see some magic happen!</h2>
        <Wrapper />
      </AppState>
    </div>
  );
}
