import React from "react";
import ImageName from "../ImageName/ImageName";

const Detetails = ({
  BgcoloR,
  RoundColor,
  TextColor,
  circletext,
  Myphoto,
  Name,
  Created,
  Hightlight,
  Discription,
  caption,
}) => {
  return (
    <div className={`${BgcoloR}   p-3   rounded drop-shadow-sm `}>
      <div className="  border-b-1 border-gray-500 pb-6">
        <div className="flex justify-between items-center pb-2 ">
          <p
            className={`${RoundColor} ${TextColor} text-[8px] p-1 px-2 rounded-full `}
          >
            {circletext}
          </p>
          <i className="fa-solid fa-ellipsis-vertical " />
        </div>
        <div>
          <p className="  py-1 text-capitalize">{Hightlight}</p>
        </div>
        <div className="flex justify-between items-center">
          <ImageName
            Created="Created By"
            Myphoto="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            Name="Avishek Sharma"
          />
          <ImageName
            Created="Type"
            Myphoto="https://openclipart.org/download/247320/abstract-user-flat-4.svg"
            Name="Personal"
          />
          <ImageName
            Created="Due Date"
            Myphoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnw7K1tcBTRBTKxkmibw6DrsQICOi754PFzIYoZDuWQ&s"
            Name="Personal"
          />
        </div>
      </div>

      <div className=" p-2 pt-3">
        <span className="fw-medium">{Discription}</span>
        <p className="text-xs pt-3">{caption}</p>
      </div>
    </div>
  );
};

export default Detetails;
