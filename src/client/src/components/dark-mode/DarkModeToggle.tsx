import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DarkModeIcon from "./DarkModeIcon";

import "./DarkModeToggle.css";

const DARK_MODE_KEY = "dark-mode";

function setDarkModeClass(dark: boolean) {
  if (dark) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem(DARK_MODE_KEY, "true");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem(DARK_MODE_KEY, "false");
  }
}

const backgroundVariants = {
  hover: {
    rotate: 45,
  },
  idle: {
    rotate: 0,
  },
  click: {
    scale: 1.2,
  },
};

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const darkModeItem = localStorage.getItem(DARK_MODE_KEY);
    if (darkModeItem !== null) {
      setDarkMode(darkModeItem === "true");
    }
  }, []);
  useEffect(() => {
    setDarkModeClass(darkMode);
  }, [darkMode]);

  return (
    <motion.button
      className="DarkModeToggle"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
      initial="idle"
      animate="idle"
      whileHover="hover"
      whileTap="click"
    >
      <motion.div
        className="DarkModeToggle-background"
        variants={backgroundVariants}
      ></motion.div>
      <div className="DarkModeToggle-content">
        <DarkModeIcon dark={darkMode} />
      </div>
    </motion.button>
  );
}

export default DarkModeToggle;
