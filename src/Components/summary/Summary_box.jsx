import React from "react";
import ImageName from "../ImageName/ImageName";

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
          Myphoto="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          Name="Personal"
        />
        <ImageName
          Created="Due Date"
          Myphoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHna_j3wV_9pWYD9khmjn73sayEWTpU0R6UZ1r7elrA&s"
          Name="Personal"
        />
      </div>
    </div>
  );
};

export default Summary_box;
