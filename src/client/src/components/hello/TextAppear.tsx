import { motion } from "framer-motion";

import Letter from "./Letter";

import "./TextAppear.css";

interface Props {
  value: string;
  duration?: number;
  delay?: number;
  startX?: number;
  startY?: number;
}

function TextAppear({
  value,
  duration = 1,
  delay = 0.5,
  startX = 0,
  startY = -10,
}: Props) {
  const chars = Array.from(value);

  const variants = {
    hidden: {
      opacity: 0,
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
      className="TextAppear"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {chars.map((c, index) => (
        <Letter char={c} key={index} startX={startX} startY={startY} />
      ))}
    </motion.span>
  );
}

export default TextAppear;
