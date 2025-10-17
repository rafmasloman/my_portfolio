import Image from "next/image";
import { ICertificateItemPropsType } from "./interface";
import { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";

const CertificateItem = (props: ICertificateItemPropsType) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [, setIsMouseLeave] = useState<boolean>(true);

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
    setIsMouseLeave(false);
  };

  const handleMouseLeave = () => {
    setIsMouseLeave(true);
    setIsMouseEnter(false);
  };

  return (
    <button
      className={`bg-gray-700 p-1 w-fit md:w-[500px] relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick}
    >
      {isMouseEnter ? (
        <div
          className={`absolute w-full flex flex-col items-center gap-1.5 top-2/5`}
        >
          <MdOutlineZoomOutMap className={`text-4xl`} />
          <h6 className="">View Certificate</h6>
        </div>
      ) : (
        <div></div>
      )}
      <Image
        src={props.imgUrl}
        className={`md:h-[350px] ${isMouseEnter ? "opacity-20" : ""} w-fit" `}
        alt=""
      />
    </button>
  );
};

export default CertificateItem;
