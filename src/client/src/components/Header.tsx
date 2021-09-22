import DarkModeToggle from './dark-mode/DarkModeToggle';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <DarkModeToggle />
    </header>
  )
}

export default Header;
