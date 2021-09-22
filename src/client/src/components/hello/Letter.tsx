import { motion } from "framer-motion";
import cn from "classnames";

import "./Letter.css";

interface Props {
  char: string;
  startX: number;
  startY: number;
}

function Letter({ char, startX, startY }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: startY,
      x: startX,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 1000,
        damping: 20,
      },
    },
  };

  return (
    <motion.span
      variants={variants}
      className={cn("Letter", { "Letter-space": char === " " })}
    >
      {char}
    </motion.span>
  );
}

export default Letter;
