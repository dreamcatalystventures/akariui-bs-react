import { AccordionProps } from "./Accordion.type";

const Accordion = ({ id, children }: AccordionProps) => {
  return (
    <>
      <div className="accordion" id={id}>
        {children}
      </div>
    </>
  );
};

export default Accordion;
