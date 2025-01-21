import React from "react";
import { TitleProps } from "./Title.type";

const Title = ({ children, type }: TitleProps) => {
  const showTitle = () => {
    if (type !== null || type !== undefined) {
      switch (type) {
        case "xl":
          return <h1 className="display-1">{children}</h1>;
        case "lg":
          return <h1 className="display-2">{children}</h1>;
        case "md":
          return <h1 className="display-3">{children}</h1>;
        case "sm":
          return <h1 className="display-4">{children}</h1>;
        case "xs":
          return <h1 className="display-5">{children}</h1>;
        case "xxs":
          return <h1 className="display-6">{children}</h1>;
        default:
          return "";
      }
    }
    return "";
  };
  return (
    <div>
      <div>{showTitle()}</div>
    </div>
  );
};

export default Title;
