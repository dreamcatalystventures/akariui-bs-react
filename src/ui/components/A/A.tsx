import { AProps } from './A.types'
import 'bootstrap/dist/css/bootstrap.min.css';
const A = ({to, children, className}: AProps) => {
  return (
    <>
      <a className={className} href={to}>
        {children}
      </a>
    </>
  )
}

export default A
