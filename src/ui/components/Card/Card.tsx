import { CardProps } from "./Card.type";

const CardLink = ({
  className,
  title,
  buttons,
  children,
  footer,
}: CardProps) => {
  return (
    <>
      <div className={`card card-custom card-flush ${className}`}>
        <div className="card-header">
          <h3 className="card-title">${title}</h3>
          <div className="card-toolbar">${buttons}</div>
        </div>
        <div className="card-body py-5">${children}</div>
        <div className="card-footer">${footer}</div>
      </div>
    </>
  );
};

export default CardLink;
