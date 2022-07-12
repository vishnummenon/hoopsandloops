import React, { FC } from "react";

import styles from "../styles/Contact.module.scss";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>
        Any questions? <span className={styles.colored}>Contact us.</span>
      </h2>
      <p className={styles.contact__paragraph}>
        We are looking forward to hearing from you. Feel free to contact us if
        you have any questions!
      </p>
      <a
        href="https://www.instagram.com/_hoops.and.loops_/"
        target="_blank"
        rel="noreferrer"
      >
        <button>Contact Us</button>
      </a>
    </div>
  );
};

export default Contact;
