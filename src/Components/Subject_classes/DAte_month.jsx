import React from "react";

const DAte_month = ({bGcOloR,MOnth,Date}) => {
  return (
    <div className={`${bGcOloR} box-border h-20 w-20 p-4  text-white rounded-lg flex flex-col justify-center items-center`}>
   
      <p className="pb-2 text-[16px]">{Date}</p>

      <p className="text-[9px]">{MOnth}</p>
    </div>

  );
};

export default DAte_month;
