import { MouseEventHandler, PropsWithChildren } from "react";

export interface IBaseButtonPropsType extends PropsWithChildren {
  varianst: "primary" | "secondary";
  className?: string;
  click?: () => void;
}

export interface ITabButtonPropsType extends PropsWithChildren {
  tabActive: number;
  activeTab: number;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
