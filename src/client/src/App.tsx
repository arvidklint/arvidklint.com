import Header from "./components/Header";
import Hello from "./components/hello/Hello";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Hello />
      </main>
    </div>
  );
}

export default App;
