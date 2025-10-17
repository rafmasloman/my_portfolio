import { StaticImageData } from "next/image";

export interface IProjectItemPropsType {
  title: string;
  image: StaticImageData;
  link: string;
  role: string;
  description: string;
  company?: string;
}
