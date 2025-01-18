import { Control } from "../../../infrastrature/thirdparty";

export interface CheckBoxProps {
  errors?: any;
  label: string;
  name: string;
  className: string;
  control: Control<any, any>;
  required?: boolean;
  disabled?: boolean;
}
