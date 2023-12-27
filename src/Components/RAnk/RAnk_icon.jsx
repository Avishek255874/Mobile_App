import React from 'react'

const RAnk_icon = ({title,icons,shadow}) => {
  return (
    <div className=" flex w-full items-center justify-around cursor-pointer   rounded-circle ">
    <div className="p-2 text-center  ">
    <img src={icons} className=' w-[30px] h-[30px]' />
        <p className="text-[10px]  text-gray-500 pt-2">{title}</p>
 </div>
    </div>
  )
}

export default RAnk_icon