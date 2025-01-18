import { JSX, ReactNode } from "react";

export interface CardProps {
  title: string;
  children: ReactNode;
  buttons?: ReactNode;
  className?: string;
  footer?: string;
}
