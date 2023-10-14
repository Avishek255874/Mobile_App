import React from "react";

const Item_Add = () => {
  return (
    <div className="w-full flex items-center  justify-between px-3 cursor-pointer">
      <div className="ml-3 ">
        <p className="text-[10px] text-gray-500">Class Strated for</p>
        <p className=" text-[14px]  fw-semibold"> 1<sup>st</sup> May 2023</p>
      </div>
  <div className="rounded-lg p-2 text-center  bg-lime-400 drop-shadow-lg  justify-content-center align-items-center">

<div className="d-flex gap-2">
<p className=" pe-2 fs-6 border-end border-red-400 ">Book a Seat</p>

<p className=" fs-6 "> $ 180.99</p>
</div>
  </div>

    </div>
  );
};

export default Item_Add;
