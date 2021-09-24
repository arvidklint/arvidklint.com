import Hello from "./hello/Hello";
import Links from "./links/Links";

import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.Main}>
      <div className={styles["Main-container"]}>
        <Hello />
        <Links />
      </div>
    </main>
  );
}

export default Main;
