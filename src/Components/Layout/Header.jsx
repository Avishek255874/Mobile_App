import React from 'react'

const Header = ({header,bgColor}) => {
  return (
    <div className={`${bgColor} h-[60px] flex items-center fixed-top`}>{header}</div>
  )
}

export default Header