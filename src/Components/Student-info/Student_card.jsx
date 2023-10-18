import React from "react";

const Student_card = ({ bOrder, Detail, caption, icon }) => {
  return (
    <div className={`${bOrder} flex w-full items-center justify-between  `}>
      <div className="p-1">
        <p className="text-[11px] text-gray-500 pb-2">{Detail}</p>
        <i className={`${icon}`} />
        <span className="ps-2 fw-semibold text-[13px]">{caption} </span>
      </div>
    </div>
  );
};

export default Student_card;
