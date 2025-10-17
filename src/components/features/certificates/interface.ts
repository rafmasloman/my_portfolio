import { StaticImageData } from "next/image";

export interface ICertificateItemPropsType {
  imgUrl: StaticImageData;
  onClick?: () => void;
}
