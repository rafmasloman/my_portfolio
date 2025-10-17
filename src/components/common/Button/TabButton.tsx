import { ITabButtonPropsType } from "./interface";

const TabButton = (props: ITabButtonPropsType) => {
  return (
    <button
      className={`flex flex-col md:flex-row gap-1.5 md:gap-3 items-center  hover:text-secondary cursor-pointer ${
        props.tabActive === props.activeTab ? `text-secondary` : `text-white`
      }`}
      onClick={props.onClick}
    >
      {props.children}
      <h6 className="text-sm md:text-base">{props.text}</h6>
    </button>
  );
};

export default TabButton;
