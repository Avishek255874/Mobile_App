import React from "react";
import ImageName from "../ImageName/ImageName";

const Task_card = ({
  Name,
  buttomtext,
  middletext,
  Uppertext,
  circletext,
  BgcoloR,
  Myphoto,
  RoundColor,
  TextColor,
  Created
}) => {
  return (
    <div className={`${BgcoloR}   p-3  rounded drop-shadow-sm `}>
      <div className="flex justify-between items-center pb-2 ">
        <p
          className={`${RoundColor} ${TextColor} text-[8px] p-1 px-2 rounded-full `}
        >
          {circletext}
        </p>
        <i className="fa-solid fa-ellipsis-vertical " />
      </div>
      <div>
        <p className="fw-bold  ">
          {Uppertext}
          <br />
          {middletext}
          <br />
          {buttomtext}
        </p>
  </div>
 <ImageName Created={Created} Myphoto={Myphoto} Name={Name}/>
    </div>
  );
};

export default Task_card;
