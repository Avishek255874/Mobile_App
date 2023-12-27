import React from "react";

const Student_card = ({ bOrder, Detail, caption, icon }) => {
  return (
    <div className={`${bOrder} flex`}>
      <div className="p-1 ">
        <p className="text-[11px] text-gray-500 pb-2 ">{Detail}</p>
        <div className="d-flex justify-center items-center">
          <img src={icon} className=" w-[30px] h-[30px]" />
          <p className="ps-2 fw-semibold text-[14px]">{caption} </p>
        </div>
      </div>
    </div>
  );
};

export default Student_card;
