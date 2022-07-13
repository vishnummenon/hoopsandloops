import React, {FC} from 'react';
import Link from 'next/link';

import styles from "../styles/ProjectSummary.module.scss";
import { IProjectSummary } from './types';

const ProjectSummary: FC<IProjectSummary> = ({
    description,
    detailPage
}: IProjectSummary) => {
    return (
        <div className={styles.container}>
            <p>{description}</p>
            <Link href="/Portfolio">Hmm, interesting!</Link>
        </div>
    );
};

export default ProjectSummary;
