import { PropsWithChildren } from "react";

interface ISkillItemPropsType extends PropsWithChildren {
  name: string;
  year: number;
}

const SkillsItem = ({ name, year, children }: ISkillItemPropsType) => {
  return (
    <div className="flex items-center gap-4 text-white">
      {children}
      <div className="flex flex-col gap-0">
        <h6 className="font-medium text-lg text-white">{name}</h6>
        <h6 className="font-medium text-sm text-gray-400">{year} Year</h6>
      </div>
    </div>
  );
};

export default SkillsItem;
