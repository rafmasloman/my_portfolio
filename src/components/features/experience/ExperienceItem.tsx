"use client";

import { IExperienceItemPropsType } from "./interface";
import Image from "next/image";
import BrandIc from "@/assets/images/brand-ic.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

const ExperienceItem = (props: IExperienceItemPropsType) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="border border-gray-700 pt-7 px-7 w-full rounded-2xl bg-dark-2">
      <div className="flex flex-row items-center gap-4">
        <div className="bg-white w-[85px] h-[85px] flex justify-center items-center px-1.5 rounded-xl">
          <Image
            alt=""
            src={props.company_logo ?? BrandIc}
            className="w-full h-fit "
          />
        </div>

        <div>
          <h4 className="text-base md:text-lg font-semibold">
            {props.position}
          </h4>

          <div className="my-2"></div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-1">
              <h6 className="font-medium text-neutral-300 text-xs md:text-base">
                {props.title}
              </h6>

              <BsDot className="text-xl" />

              <h6 className="font-medium text-neutral-300 text-xs md:text-base">
                {props.position_status}
              </h6>
            </div>

            <div className="flex gap-1 items-center">
              <h6 className="text-xs md:text-base text-neutral-300">
                {props.start_time} - {props.end_time}
              </h6>
              <BsDot className="text-xl" />
              <h6 className="text-xs md:text-base text-neutral-300">Onsite</h6>
            </div>
          </div>

          <div className="my-2"></div>

          <button
            className="flex text-neutral-400 items-center gap-2.5 w-full hover:text-secondary"
            onClick={handleShowDetail}
          >
            <IoIosArrowForward />
            <p>Show details</p>
          </button>
        </div>
      </div>

      <div className="my-7"></div>

      <ul className={`list-disc px-7 ${showDetail ? "block" : "hidden"}`}>
        {props.point_description.map((item, index) => {
          return (
            <li className="my-2.5 text-sm md:text-base" key={index + 1}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;
