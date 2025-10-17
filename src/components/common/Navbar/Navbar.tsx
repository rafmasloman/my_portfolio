import { NAVBAR_LIST } from "@/constant/router";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="hidden sm:flex sm:gap-10 md:gap-12">
      {NAVBAR_LIST.map((item, index) => (
        <NavLink key={index} title={item.text} href={item.href} />
      ))}
    </nav>
  );
};

export default Navbar;
