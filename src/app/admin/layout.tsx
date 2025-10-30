import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { FiInbox } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { SlOrganization } from "react-icons/sl";
import BrandIc from "@/assets/brand-ic.svg";

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white h-screen flex flex-row ">
      <div className=" bg-dark pl-7 pr-14 py-14 flex flex-col gap-20 rounded-tr-3xl rounded-br-3xl">
        <div className=" flex items-center justify-center">
          <Image src={BrandIc} alt="" className="w-10" />
        </div>

        <ul className="flex flex-col  gap-8 h-full">
          <li className="text-white flex gap-4 items-center ">
            <MdOutlineWorkspacePremium className="text-xl" />
            <Link href={"/experiences"} className="text-base font-medium">
              Experience
            </Link>
          </li>

          <li className="text-white flex gap-4 items-center ">
            <GrCertificate className="text-xl" />
            <Link href={"/experiences"} className="text-base font-medium">
              Certificate
            </Link>
          </li>

          <li className="text-white flex gap-4 items-center ">
            <SlOrganization className="text-xl" />
            <Link href={"/experiences"} className="text-base font-medium">
              Organization
            </Link>
          </li>

          <li className="text-white flex gap-4 items-center ">
            <FiInbox className="text-xl" />
            <Link href={"/experiences"} className="text-base font-medium">
              Projects
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
