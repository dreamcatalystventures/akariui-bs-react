import React from "react";
import { BreadcrumbProps } from "./Breadcrumb.type";
const Breadcrumb = ({ active, navItems }: BreadcrumbProps) => {
  return (
    <ol className="breadcrumb text-muted fs-6 fw-bold mb-5">
      {navItems.map((item: string, index: number) => {
        return (
          <li className="breadcrumb-item pe-3" key={`breadcrumb-item-${index}`}>
            <a href="#" className="pe-3">
              {item}
            </a>
          </li>
        );
      })}
      <li className="breadcrumb-item px-3 text-muted">{active}</li>
    </ol>
  );
};

export default Breadcrumb;
