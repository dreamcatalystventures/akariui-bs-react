import React from "react";
import { isEmpty } from "../../../domain/utils";
import { Controller } from "../../../infrastrature/thirdparty";
import { CheckBoxGroupProps } from "./CheckBoxGroup.type";

const CheckBoxGroup = ({ name, control, options }: CheckBoxGroupProps) => {
  return <>{name}</>;
};

export default CheckBoxGroup;
