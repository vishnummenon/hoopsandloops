import React, { FC } from "react";

import styles from "../styles/Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>{`made with love <3`}</p>
      <div className={styles.footer__left}>
        <a
          href="https://github.com/vishnummenon/hoopsandloops.git"
          target="_blank"
          rel="noreferrer"
        >
          Vishnu Mohan Shyla
        </a>
      </div>
    </footer>
  );
};

export default Footer;
