import React from "react";

const Task_detail = () => {
  return (
   <div className="w-full  p-3  flex justify-between items-center">
   <div className=" flex justify-between items-center  gap-3">
   <i className=" fa-solid fa-arrow-left "/>
   <p className="fs-5 font-semibold">Task Detail</p> 
   </div>
   <div className="">
   <i className="  fa-solid fa-ellipsis-vertical font-semibold fs-5"/>
   </div>
   </div>
  );
};

export default Task_detail;
