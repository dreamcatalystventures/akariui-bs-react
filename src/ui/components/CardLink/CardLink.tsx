import { CardLinkProps } from "./CardLink.type";

const CardLink = ({ title, to, icon }: CardLinkProps) => {
  return (
    <>
      <div className="col-3  mb-4 border mx-3">
        <div className="card card-stretch">
          <a
            href={to}
            className="btn btn-flex btn-text-gray-800 btn-icon-gray-400
           
            bg-body flex-column justfiy-content-start align-items-start text-start w-100 p-10"
          >
            {icon}
            <span className="fs-4 fw-bold">{title}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardLink;
