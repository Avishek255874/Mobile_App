import React from "react";

const ImageName = ({ Myphoto,Name,Created}) => {
  return (
    <div className="">
      <p className="text-[9px] text-gray-500 py-1">{Created} </p>
      <div className="flex items-center gap-2">
        <img
          className="inline-block h-4 w-4 rounded-full "
          src={Myphoto}
          alt="" />
        <p className="text-[10px] fw-medium">{Name}</p>
      </div>
    </div>
  );
};

export default ImageName;
