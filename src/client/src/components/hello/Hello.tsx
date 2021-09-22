import TextAppear from "./TextAppear";

import "./Hello.css";
import { getTimePeriod, TimePeriod } from "../../time";

interface Hellos extends Record<TimePeriod, Array<string>> {}

const hellos: Hellos = {
  "DAY": [
    "Hello",
    "Hi!"
  ],
  "MORNING": [
    "Good morning",
  ],
  "EVENING": [
    "Good evening",
  ],
  "NIGHT": [
    "Good evening"
  ]
}

function getRandomFromArray<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)]
}

function Hello() {
  const period = getTimePeriod()
  const helloArray = hellos[period];
  const hello = getRandomFromArray(helloArray);

  return (
    <div className="Hello">
      <h1 className="Hello-title">
        <TextAppear value={`${hello} `} duration={0.3} delay={0.4} />
        <TextAppear value="👋" delay={1} startX={10} startY={0} />
        <br />
        <TextAppear value="I'm Arvid" duration={0.7} delay={1.5} />
      </h1>
      <h2 className="Hello-subtitle">
        <TextAppear value="/ Fullstack Engineer" delay={2.5} startX={0} startY={10} />
      </h2>
    </div>
  );
}

export default Hello;
