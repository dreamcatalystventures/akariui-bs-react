import { BootstrapUI } from "../../enums/BootstrapUI";

export interface ButtonProps {
  onClick?: any;
  theme: BootstrapUI;
  disabled?: boolean | undefined;
  value?: string;
  loading?: boolean;
  sx?: string;
  type: "button" | "submit" | "reset" | undefined;
  visible?: boolean;
}
