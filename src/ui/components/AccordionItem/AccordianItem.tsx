import {ReactNode} from 'react'

interface Props {
  id: string
  children: ReactNode
  parent: string
  title: string
}

const AccordionItem = ({id, children, parent, title}: Props) => {
  return (
    <>
      <div className='accordion-item'>
        <h2 className='accordion-header' id={`accordion-header-${id}`}>
          <button
            className='accordion-button fs-4 fw-bold collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#accordion-body-${id}`}
            aria-expanded='false'
            aria-controls={`accordion-body-${id}`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`accordion-body-${id}`}
          className='accordion-collapse collapse'
          aria-labelledby={`accordion-header-${id}`}
          data-bs-parent={`#${parent}`}
        >
          <div className='accordion-body'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default AccordionItem
