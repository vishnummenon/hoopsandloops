import React, {FC} from 'react';
import Image from 'next/image';

import styles from '../styles/Header.module.scss';
import logo from '../public/logo.svg'

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Image src={logo} alt="" width="38" height="38"  />
                <h1 className={styles.header__title}>HoopsAndLoops</h1>
            </div>
        </header>
    )
};

export default Header;
