import React from 'react'

const Footer = ({footer,bgColor}) => {
  return (
    <div className= {`${bgColor} h-[60px] flex items-center fixed-bottom `} >{footer}</div>
  )
}

export default Footer