import { ITypographyComponentPropsType } from "./interface";

const Typography = ({ className, ...props }: ITypographyComponentPropsType) => {
  return (
    <p {...props} className={className}>
      {props.children}
    </p>
  );
};

export default Typography;
