import { TbStackFilled } from "react-icons/tb";
import { IExperienceItemPropsType } from "./interface";

const ExperienceItem = (props: IExperienceItemPropsType) => {
  return (
    <div className="border border-gray-400 p-7 w-full rounded-xl bg-dark-2">
      <div className="flex flex-row items-center gap-4">
        <TbStackFilled className="text-2xl md:text-4xl" />
        <div>
          <h4 className="text-base md:text-xl font-bold">{props.title}</h4>

          <div className="my-2"></div>

          <div className="flex flex-col gap-2.5 ">
            <h6 className="font-semibold text-xs md:text-base">
              {props.position} | {props.position_status}
            </h6>
            <h6 className="italic text-xs md:text-base">
              {props.start_time} - {props.end_time}
            </h6>
          </div>
        </div>
      </div>

      <div className="my-7"></div>

      <ul className="list-disc px-7">
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
