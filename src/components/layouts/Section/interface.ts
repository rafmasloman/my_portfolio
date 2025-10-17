import { PropsWithChildren } from "react";

export interface ISectionComponentPropsType extends PropsWithChildren {
  direction?: "row" | "column";
  justify?:
    | "baseline"
    | "between"
    | "around"
    | "center"
    | "end"
    | "start"
    | undefined;
  onClick?: () => void;
  className?: string;
}
