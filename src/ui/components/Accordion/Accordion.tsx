import {ReactNode} from 'react'
import { AccordianProps } from './Accordian.types'
const Accordion = ({id, children}: AccordianProps) => {
  return (
    <>
      <div className='accordion' id={id}>
        {children}
      </div>
    </>
  )
}

export default Accordion
