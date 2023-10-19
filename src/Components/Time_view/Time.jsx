import React from "react";

const Time = ({Schedule,iconss}) => {
  return (
    <div className="px-2 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <i class={`${iconss} text-gray-700 `}/>
        <p className="text-[16px] text-gray-600 font-semibold">{Schedule}</p>
      </div>
      <p className="text-[12px] text-gray-400">View All</p>
    </div>
  );
};

export default Time;
