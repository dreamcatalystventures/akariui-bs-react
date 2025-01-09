import { BootstrapUI } from "../../enums/BootstrapUI";
import { ButtonProps } from "./Button.types";
import React from "react";
const Button = ({
  onClick,
  value,
  theme,
  disabled,
  type,
  loading,
  sx,
  visible = true,
  ...props
}: ButtonProps) => {
  let className = "";
  switch (theme) {
    case BootstrapUI.Primary:
      className = "btn btn-primary btn-lg btn-block";
      break;
    case BootstrapUI.Secondary:
      className = "btn btn-secondary btn-lg btn-block";
      break;
    case BootstrapUI.Success:
      className = "btn btn-success btn-lg btn-block";
      break;
    case BootstrapUI.Danger:
      className = "btn btn-danger btn-lg btn-block";
      break;
    case BootstrapUI.Warning:
      className = "btn btn-warning btn-lg btn-block";
      break;
    case BootstrapUI.Info:
      className = "btn btn-warning btn-lg btn-info";
      break;
    case BootstrapUI.Light:
      className = "btn btn-warning btn-lg btn-light";
      break;
    case BootstrapUI.Dark:
      className = "btn btn-warning btn-lg btn-dark";
      break;
    default:
      className = "btn btn-primary btn-lg btn-block";
      break;
  }

  if (!visible) return <></>;
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        {...props}
        onClick={onClick}
        className={`${className} ${sx}`}
      >
        {!loading && <span className="indicator-label"> {value}</span>}
        {loading && (
          <span className="indicator-progress" style={{ display: "block" }}>
            Please wait...
            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
