enum PassionProjectTypes {
  Crochet = "Crochet",
  Embroidery = "Embroidery",
  Resin = "Resin",
  Stitching = "Stitching",
}

type IPreviousProjects = {
  id: PassionProjectTypes;
  caption: string;
  works: StaticImageData[];
};

const previousProjects: IPreviousProjects[] = []; 

export { PassionProjectTypes };