import React from 'react'
import { scopedClassMaker } from '../helpers/classes'


interface Props extends React.HtmlHTMLAttributes<HTMLElement> {

}

const sc = scopedClassMaker('ree-layout')
const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </div>
  )
}

export default Content;