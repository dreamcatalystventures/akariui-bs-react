import { ReactNode } from "react";
import { BootstrapUI } from "../../enums/BootstrapUI";

export interface AlertProps {
    type: BootstrapUI;
    icon: ReactNode;
    text: string;
    title: string;
  }
  