import React from "react";
import Task from "../Task/Task";

const Task_header = () => {
  return (
    <div className="flex w-full items-center justify-between p-3">
      <p className="fs-5 font-semibold">Task & Note</p>
      <div className="flex justify-between  gap-3">
        <i class="fa-solid fa-magnifying-glass" />
        <i class="fa-solid fa-sliders" />
      </div>
    </div>
  );
};

export default Task_header;
