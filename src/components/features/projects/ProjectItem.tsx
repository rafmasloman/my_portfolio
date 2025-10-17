import Image from "next/image";
import { IProjectItemPropsType } from "./interface";
import Link from "next/link";

const ProjectItem = (props: IProjectItemPropsType) => {
  return (
    <div className="flex flex-col md:flex-row w-fit h-full  ">
      <Image
        src={props.image}
        // width={500}
        quality={100}
        alt=""
        className="w-full lg:w-[500px] mr-24 mb-7 md:mb-0 "
      />

      <div className="h-full flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h6 className="text-lg md:text-xl font-semibold text-center md:text-justify">
            {" "}
            {props.title}
          </h6>
          <p className=" text-nowrap font-medium text-center text-sm md:text-base md:text-justify">
            {" "}
            Company : <span className="text-secondary">{props.company}</span>
          </p>

          <div className="md:my-2.5"></div>

          <p
            id="description"
            className="text-center text-sm md:text-base md:text-justify"
          >
            {props.description}
          </p>
        </div>

        <Link
          href={""}
          className="underline text-secondary text-center md:text-justify "
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
