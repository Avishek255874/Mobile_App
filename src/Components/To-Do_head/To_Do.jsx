import React from "react";

const To_Do = ({ Texts, number }) => {
  return (
    <div className="p-2 flex  text-violet-500 gap-2  text-[10px]  border-violet-600 ">
      <p>{Texts}</p>
      <p className=" bg-violet-500 text-white flex items-center rounded-full px-2">
        {number}
      </p>
    </div>
  );
};

export default To_Do;
