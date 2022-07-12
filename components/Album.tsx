import React, {FC} from 'react';
import Image from 'next/image';

import { CoverImage } from '../assets/images/png';
import styles from "../styles/Album.module.scss";

const Album: FC = () => {
    return (
      <div className={styles.album}>
        <a
          href="https://www.instagram.com/_hoops.and.loops_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={CoverImage} />
        </a>
      </div>
    );
};

export default Album;
