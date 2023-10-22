import React from "react";

const Summary_box = ({
  BgcoloR,
  RoundColor,
  TextColor,
  circletext,
  Myphoto,
  Name,
  Created,
  Hightlight,
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
        <p className="  py-2">{Hightlight}</p>
        <p className="text-[10px] text-gray-400">{Created}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex">
          <div className=" ">
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

export default Summary_box;
