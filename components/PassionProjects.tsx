import React, {FC} from 'react';
import Image from 'next/image';

import styles from "../styles/PassionProjects.module.scss";
import { IProject } from './types';
import { CrochetKitten, EmbroideryCycle, ResinClock, StitchingDress } from '../assets/images/png';

const ProjectCard = ({project}: {project: IProject}) => (
    <div>
        <Image src={project.thumbnail} alt={project.name} />
        <h4>{project.name}</h4>
    </div> 
);

const PassionProjects: FC = () => {
    const projectsList: IProject[] = [
      {
        id: "1",
        name: "Crochet",
        thumbnail: CrochetKitten,
      },
      {
        id: "2",
        name: "Resin Art",
        thumbnail: ResinClock,
      },
      ,
      {
        id: "3",
        name: "Embroidery",
        thumbnail: EmbroideryCycle,
      },
      ,
      {
        id: "4",
        name: "Stitch Works",
        thumbnail: StitchingDress,
      },
    ];

    return (
      <div className={styles.container}>
        <h3>Passion Projects</h3>
        <div className={styles.imageContainer}>
          {projectsList.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    );
};

export default PassionProjects;
