import { AlertProps } from "./Alert.type";

const Alert = ({ type, text, title, icon }: AlertProps) => {
  return (
    <div
      className={`alert alert-dismissible bg-light-${type} d-flex flex-column flex-sm-row p-5 mb-10`}
    >
      <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0">
        {icon}
      </span>
      <div className="d-flex flex-column text-primary pe-0 pe-sm-10">
        <h5 className="mb-1">{title}</h5>
        <span>{text}</span>
      </div>

      <button
        type="button"
        className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto"
        data-bs-dismiss="alert"
      >
        <span className="svg-icon svg-icon-1 svg-icon-primary">...</span>
      </button>
    </div>
  );
};

export default Alert;
