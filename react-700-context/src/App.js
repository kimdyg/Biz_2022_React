import "./App.css";
import Main from "./comps/Main";
import { AppContextProvider } from "./contex/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </div>
  );
}

export default App;
