import React from 'react'

const RAnk_icon = ({title,icons}) => {
  return (
    <div className=" flex w-full items-center justify-around cursor-pointer ">
    <div className="p-2 text-center ">
        <i className={`${icons} text-gray-700 `}/>
        <p className="text-[10px]  text-gray-500 pt-2">{title}</p>
 </div>
    </div>
  )
}

export default RAnk_icon