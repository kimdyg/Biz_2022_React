import "./App.css";
import "./w3css.css";
import TodoMain from "./comps/TodoMain";

function App() {
  return (
    <div className="App">
      <section className="w3-container w3-margin">
        <h1>할일 을 적자 흑자</h1>
        <TodoMain />
      </section>
    </div>
  );
}

export default App;
