import React, {FC} from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { CoverImage, SecondImage } from '../assets/images/png';
import styles from "../styles/Album.module.scss";

const Album: FC = () => {
    return (
      <div className={styles.album}>
        <Carousel autoPlay infiniteLoop interval={3000} emulateTouch>
          <a
            href="https://www.instagram.com/_hoops.and.loops_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={CoverImage} alt="first" />
          </a>
          <a
            href="https://www.instagram.com/_hoops.and.loops_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={SecondImage} alt="second" />
          </a>
        </Carousel>
      </div>
    );
};

export default Album;
