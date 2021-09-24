import { motion } from "framer-motion";
import cn from "classnames";

import styles from "./Link.module.css";

export interface Props {
  name: string;
  href: string;
  content: React.ReactNode;
}

const backgroundVariants = {
  hover: {
    rotate: 45,
  },
  idle: {
    rotate: 0,
  },
};

const background2Variants = {
  hover: {
    scale: 1,
    rotate: 25,
  },
  idle: {
    scale: 0.8,
    rotate: 0,
  },
};

function getNameY() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 1500 ? -15 : -35;
  }
  return -15;
}

function getContentY() {
  if (typeof window !== "undefined") {
    return window.innerWidth < 1500 ? -15 : -20;
  }
  return -15;
}

function Link({ name, href, content }: Props) {
  const nameVariants = {
    hover: {
      opacity: 1,
      scale: 1,
      y: getNameY(),
    },
    idle: {
      opacity: 0,
      scale: 0,
      y: 0,
    },
  };

  const contentVariant = {
    hover: {
      scale: 0.7,
      y: getContentY(),
    },
    idle: {
      scale: 1,
      y: 0,
    },
  };

  return (
    <motion.a
      className={styles["Link"]}
      href={href}
      target="_blank"
      animate="idle"
      whileHover="hover"
    >
      <motion.div
        variants={background2Variants}
        className={cn(
          styles["Link-background"],
          styles["Link-background-accent"]
        )}
      ></motion.div>
      <motion.div
        variants={backgroundVariants}
        className={styles["Link-background"]}
      ></motion.div>
      <motion.div variants={contentVariant} className={styles["Link-content"]}>
        {content}
      </motion.div>
      <motion.div variants={nameVariants} className={styles["Link-name"]}>
        {name}
      </motion.div>
    </motion.a>
  );
}

export default Link;
