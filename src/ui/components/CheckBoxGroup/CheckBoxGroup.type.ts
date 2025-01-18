import { Option } from "../../../domain/types/Option.type";
import { Control } from "../../../infrastrature/thirdparty";

export interface CheckBoxGroupProps {
  name: string;
  options: Option[];
  className: string;
  control: Control<any, any>;
}
