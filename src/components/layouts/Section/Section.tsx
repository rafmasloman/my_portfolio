import { ISectionComponentPropsType } from "./interface";

const Section = ({
  direction,
  justify,
  className,
  children,
  onClick,
}: ISectionComponentPropsType) => {
  const flexDirection = direction === "row" ? "flex-row" : "flex-col";
  let justifyContent = "justiry-baseline";

  switch (justify) {
    case "between":
      justifyContent = "justify-between";
      break;

    case "around":
      justifyContent = "justify-around";
      break;

    case "center":
      justifyContent = "justify-center";
      break;

    case "end":
      justifyContent = "justify-end";
      break;

    case "start":
      justifyContent = "justify-start";
      break;

    default:
      break;
  }

  return (
    <div
      className={`flex ${flexDirection} py-10  ${justifyContent} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Section;
