import React from "react";

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
        <p className="fw-bold  pb-2">
          {Uppertext}
          <br />
          {middletext}
          <br />
          {buttomtext}
        </p>
        <p className="text-[10px] text-gray-400">Created By</p>
      </div>

      <div>
        <div className="flex">
          <div className=" p-1">
            <img
              className="inline-block h-5 w-5 rounded-full "
              src={Myphoto}
              alt=""
            />
          </div>
          <div className=" p-2 ">
            <p className="text-[10px] fw-bold">{Name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task_card;
