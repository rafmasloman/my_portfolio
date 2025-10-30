import { StaticImageData } from "next/image";

export interface IExperienceItemPropsType {
  title: string;
  description?: string;
  point_description: string[];
  start_time: string;
  end_time: string;
  position: string;
  position_status: string;
  city: string;
  country: string;
  company_logo?: StaticImageData;
}

export interface IOrganizationalItemPropsType {
  name: string;
  point_description: string[];
  division: string;
  position: string;
}
