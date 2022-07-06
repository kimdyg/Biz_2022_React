import logo from "./logo.svg";
import ApiMain from "./comps/ApiMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ApiMain />
    </div>
  );
}

export default App;
