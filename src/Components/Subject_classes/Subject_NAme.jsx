import React from "react";

const Subject_NAme = ({Subject}) => {
  return (
    <div className="ml-4 ">
      <p >{Subject}</p>
      <div className="flex text-[10px] text-gray-500 py-2  gap-2  items-center">
        <i class="fa-regular fa-clock  " />
        <p className="text-[10px] text-gray-500  ">9:00 - 10:00 AM</p>
      </div>
      <div className="flex text-[10px] text-gray-500  gap-2  items-center">
        <i class="fas fa-location-dot" />
        <p className="text-[10px] text-gray-500  ">Room A1 , 2nd Floor</p>
      </div>
    </div>
  );
};

export default Subject_NAme;
