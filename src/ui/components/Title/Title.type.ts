import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode;
  type: "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
}
