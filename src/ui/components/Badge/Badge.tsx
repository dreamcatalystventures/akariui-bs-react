import React from "react";
import { BootstrapUI } from "../../enums/BootstrapUI";
import { BadgeProps } from "./Badge.type";

const Badge = ({ type, text }: BadgeProps) => {
  if (type == BootstrapUI.Light)
    return <span className={`badge badge-${BootstrapUI.Light}`}>{text}</span>;
  if (type == BootstrapUI.Secondary)
    return (
      <span className={`badge badge-${BootstrapUI.Secondary}`}>{text}</span>
    );
  if (type == BootstrapUI.Success)
    return <span className={`badge badge-${BootstrapUI.Success}`}>{text}</span>;
  if (type == BootstrapUI.Info)
    return <span className={`badge badge-${BootstrapUI.Info}`}>{text}</span>;
  if (type == BootstrapUI.Warning)
    return <span className={`badge badge-${BootstrapUI.Warning}`}>{text}</span>;
  if (type == BootstrapUI.Danger)
    return <span className={`badge badge-${BootstrapUI.Danger}`}>{text}</span>;
  if (type == BootstrapUI.Dark)
    return <span className={`badge badge-${BootstrapUI.Dark}`}>{text}</span>;
  return <></>;
};

export default Badge;
