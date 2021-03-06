import { motion } from "framer-motion";

import Letter from "./Letter";

import styles from "./TextAppear.module.css";

interface Props {
  value: string;
  duration?: number;
  delay?: number;
  startX?: number;
  startY?: number;
  animate?: string;
  type?: "spring" | "tween";
}

function TextAppear({
  value,
  duration = 1,
  delay = 0.5,
  startX = 0,
  startY = -10,
  animate = "visible",
  type = "spring"
}: Props) {
  const chars = Array.from(value);

  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration / chars.length,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.span
      className={styles["TextAppear"]}
      variants={variants}
      initial="hidden"
      animate={animate}
    >
      {chars.map((c, index) => (
        <Letter char={c} key={index} startX={startX} startY={startY} type={type} />
      ))}
    </motion.span>
  );
}

export default TextAppear;
