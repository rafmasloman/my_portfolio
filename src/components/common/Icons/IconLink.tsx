import Link from "next/link";
import { PropsWithChildren } from "react";

interface IconLinkPropsType extends PropsWithChildren {
  url: string;
}

const IconLink = ({ url, children }: IconLinkPropsType) => {
  return (
    <Link target="_blank" href={url}>
      {children}
    </Link>
  );
};

export default IconLink;
