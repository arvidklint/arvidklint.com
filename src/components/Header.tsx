import DarkModeToggle from "./dark-mode/DarkModeToggle";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
