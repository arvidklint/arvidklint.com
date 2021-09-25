import { motion } from "framer-motion";

import Link, { Props as LinkProps } from "./Link";

import Github from "./svg/Github"
import Linkedin from "./svg/Linkedin"
import Email from "./svg/Email"
// import { ReactComponent as Github } from "./svg/github.svg";
// import { ReactComponent as Linkedin } from "./svg/linkedin.svg";
// import { ReactComponent as EMail } from "./svg/email.svg";

import styles from "./Links.module.css";

const links: Array<LinkProps> = [
  {
    name: "Github",
    href: "https://github.com/arvidsat",
    content: <Github />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/arvidklint",
    content: <Linkedin />,
  },
  {
    name: "E-mail",
    href: "mailto:arvidklint@protonmail.com",
    content: <Email />,
  },
];

const ulVariants = {
  hidden: { },
  visible: {
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      delayChildren: 3.5,
    },
  },
};

const liVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
        duration: 1,
        type: "easeOut"
    }
  },
};

function Links() {
  return (
    <motion.ul
      variants={ulVariants}
      initial="hidden"
      animate="visible"
      className={styles["Links"]}
    >
      {links.map((link) => (
        <motion.li variants={liVariants} key={link.name}>
          <Link {...link} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Links;
