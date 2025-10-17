import { PropsWithChildren } from "react";

interface IContainerPropsType extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IContainerPropsType) => {
  return (
    <div className={`container px-6 md:px-0 md:mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
