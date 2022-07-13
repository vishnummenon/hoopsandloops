import React, {FC} from 'react';
import Link from 'next/link';

import styles from "../styles/ProjectSummary.module.scss";
import { IProjectSummary } from './types';

const ProjectSummary: FC<IProjectSummary> = ({
    description,
    detailPage,
    title,
    id
}: IProjectSummary) => {
    return (
      <div className={styles.container}>
        <p>{description}</p>
        <Link href={{pathname: detailPage, query: { title, id }}}>
            Hmm, interesting!
        </Link>
      </div>
    );
};

export default ProjectSummary;
