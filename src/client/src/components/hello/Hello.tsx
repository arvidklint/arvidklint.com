import FirstName from "./FirstName";
import TextAppear from "./TextAppear";

import "./Hello.css";

const hellos = [
  'Hello.',
  'Howdy hey.',
  'Hi!',
]

function Hello() {
  return (
    <div className="Hello">
      <h1 className="Hello-title">
        <TextAppear value="Hello. " duration={0.3} delay={0.4} />
        <TextAppear value="👋 " delay={1} />
        <TextAppear value="I'm Arvid " duration={0.7} delay={1.5} />
      </h1>
      <h2 className="Hello-subtitle">
        <TextAppear value="Fullstack Engineer" delay={3} />
      </h2>
    </div>
  );
}

export default Hello;
