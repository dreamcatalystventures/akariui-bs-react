import { AlertProps } from "./Alert.tyoes";
const Alert = ({ type, text, title, icon }: AlertProps) => {
  return (
    <>
      <div
        className={`alert  alert-${type} d-flex flex-column flex-sm-row p-5 mb-10`}
      >
        <span
          className={`svg-icon svg-icon-2hx svg-icon-${type} me-4 mb-5 mb-sm-0`}
        >
          {icon}
        </span>
        <div className={`d-flex flex-column text-${type} pe-0 pe-sm-10`}>
          <h5 className="mb-1">{title}</h5>
          <span>{text}</span>
        </div>
      </div>
    </>
  );
};

export default Alert;
