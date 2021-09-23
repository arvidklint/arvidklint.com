import { motion } from "framer-motion";
import { useState } from "react";

import TextAppear from "../hello/TextAppear";

import "./Link.css";

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

const contentVariants = {
  hover: {
    scale: 1,
  },
  idle: {
    scale: 0.8,
  },
};

function Link({ name, href, content }: Props) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <motion.a
      className="Link"
      href={href}
      target="_blank"
      animate="idle"
      whileHover="hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div variants={backgroundVariants} className="Link-background">
        <div className="Link-name-container">
          <div className="Link-name-pusher"></div>
          <div className="Link-name">
            <TextAppear
              value={`${name}`}
              duration={0.3}
              delay={0.2}
              startX={20}
              startY={0}
              animate={hover ? "visible" : "hidden"}
              type="tween"
            />
          </div>
          {/* <span className="Link-name">{name}</span> */}
        </div>
      </motion.div>
      <div className="Link-content">
        {content}
      </div>
    </motion.a>
  );
}

export default Link;
