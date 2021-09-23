import Hello from "./hello/Hello";
import Links from "./links/Links";

import "./Main.css";

function Main() {
  return (
    <main className="Main">
      <div className="Main-container">
        <Hello />
        <Links />
      </div>
    </main>
  );
}

export default Main;
