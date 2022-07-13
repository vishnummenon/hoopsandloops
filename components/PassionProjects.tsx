import React, {FC, useState} from 'react';
import Image from 'next/image';

import { PassionProjectTypes } from '../constants/projects';

import styles from "../styles/PassionProjects.module.scss";
import { IProject } from './types';
import { CrochetKitten, EmbroideryCycle, ResinClock, StitchingDress } from '../assets/images/png';
import ProjectSummary from './ProjectSummary';

const ProjectCard = ({
  project,
  setSelectedProject,
}: {
  project: IProject;
  setSelectedProject: React.Dispatch<React.SetStateAction<IProject>>;
}) => {
  const handlePress = () => setSelectedProject(project);

  return (
    <div onClick={handlePress}>
      <Image src={project.thumbnail} alt={project.name} />
      <h4>{project.name}</h4>
    </div>
  );
};

const PassionProjects: FC = () => {
    // @ts-ignore
    const projectsList: IProject[] = [
      {
        id: PassionProjectTypes.Crochet,
        name: "Crochet",
        thumbnail: CrochetKitten,
        description:
          "Crochet is a popular needle craft that uses a hook and yarn or thread.",
        detailPage: "",
      },
      {
        id: PassionProjectTypes.Resin,
        name: "Resin Art",
        thumbnail: ResinClock,
        description:
          "Resin art is created when a runny chemical called epoxy resin is combined with various colour pigments and additives to produce a blend of unique patterns and textures.",
        detailPage: "",
      },
      ,
      {
        id: PassionProjectTypes.Embroidery,
        name: "Embroidery",
        thumbnail: EmbroideryCycle,
        description:
          "Embroidery is the craft of decorating fabric or other materials using a needle to apply thread or yarn.",
        detailPage: "",
      },
      ,
      {
        id: PassionProjectTypes.Stitching,
        name: "Stitch Works",
        thumbnail: StitchingDress,
        description:
          "In the textile arts, a stitch is a single turn or loop of thread, or yarn. Stitches are the fundamental elements of sewing, knitting, embroidery, crochet, and needle lace-making,",
        detailPage: "",
      },
    ];

    const [selectedProject, setSelectedProject] =
      useState<IProject>(projectsList[0]);

    return (
      <div className={styles.container}>
        <h3>Passion Projects</h3>
        <div className={styles.imageContainer}>
          {projectsList.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
        <ProjectSummary
          description={selectedProject?.description}
          detailPage={selectedProject?.detailPage}
        />
      </div>
    );
};

export default PassionProjects;
