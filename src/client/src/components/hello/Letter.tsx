import { motion } from "framer-motion";
import cn from 'classnames';

import "./Letter.css";

interface Props {
  char: string;
}

const variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 1000,
        damping: 20,
      }
    }
}

function Letter({ char }: Props) {
  return <motion.span
    variants={variants}
    className={cn('Letter', { 'Letter-space': char === ' ' })}
  >{char}</motion.span>;
}

export default Letter;
