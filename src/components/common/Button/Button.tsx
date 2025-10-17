import { IBaseButtonPropsType } from "./interface";

const Button = ({
  varianst,
  children,
  className,
  click,
}: IBaseButtonPropsType) => {
  const generateVarians =
    varianst === "primary" ? "bg-primary" : "bg-secondary";

  const generateTextBtnColors =
    varianst === "primary" ? `text-light` : `text-dark`;

  return (
    <button
      className={`${generateVarians} ${generateTextBtnColors} ${className}  px-10 py-3 rounded-lg font-medium w-fit`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
