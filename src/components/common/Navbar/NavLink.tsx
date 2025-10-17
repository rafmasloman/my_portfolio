import Link from "next/link";
import { INavLinkComponentPropsType } from "./interface";

const NavLink = ({ title, href }: INavLinkComponentPropsType) => {
  return (
    <Link
      href={href}
      className="text-white text-sm md:text-base hover:text-secondary"
    >
      {title}
    </Link>
  );
};

export default NavLink;
