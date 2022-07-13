import { PassionProjectTypes } from "../constants/projects";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: StaticImageData;
}
export interface IProject {
  id: PassionProjectTypes;
  name: string;
  thumbnail: StaticImageData;
  description: string;
  detailPage: string;
}

export interface IProjectSummary {
  title: string;
  description: string;
  detailPage: string;
  id: PassionProjectTypes;
}