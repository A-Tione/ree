import React from 'react'
import { scopedClassMaker } from '../helpers/classes'


interface Props extends React.HtmlHTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('ree-layout')
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      {props.children}
    </div>
  )
}

export default Aside;