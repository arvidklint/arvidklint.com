import { motion } from "framer-motion";
import cn from "classnames";

import "./Letter.css";

interface Props {
  char: string;
  startX: number;
  startY: number;
  type: "spring" | "tween";
}

function Letter({ char, startX, startY, type }: Props) {
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
        duration: type === "tween" ? 0.15 : null,
        type,
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
