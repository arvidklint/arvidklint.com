import Header from "./components/Header";
import Main from "./components/Main";

import { TimePeriod, getTimePeriod } from './time';

import "./App.css";

function setFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>('[rel=icon]');
  if (!favicon) return

  const period = getTimePeriod();
  switch (period) {
    case (TimePeriod.NIGHT):
      favicon.href = `${process.env.PUBLIC_URL}/favicon_sleep/favicon.ico`
      break;
    default:
      favicon.href = `${process.env.PUBLIC_URL}/favicon_happy/favicon.ico`
  }
}

function App() {
  setFavicon();

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
