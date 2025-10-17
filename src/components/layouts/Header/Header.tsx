import Navbar from "@/components/common/Navbar/Navbar";
import Container from "../Container/Container";
import ICBrand from "@/components/common/Icons/ICBrand";
import Button from "@/components/common/Button/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-dark border-0 px-6 md:px-10 md:mx-auto pt-10">
      <ICBrand />

      <Navbar />

      <div className="hidden md:block">
        <Button varianst="secondary" className="cursor-pointer">
          Download CV <span className="ml-2">{`-->`}</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
