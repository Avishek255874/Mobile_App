import React from "react";

const Menu_footer = () => {
  return (
    <div className="w-full flex items-center  justify-between px-3 cursor-pointer  ">
      <i className="text-gray-500 fa-solid fa-house" />
      <i className=" text-gray-400 fa-solid fa-folder-closed" />
      <div class="rounded-circle text-center h-12 w-12 bg-lime-400 drop-shadow-lg d-flex justify-content-center align-items-center">
        <i class=" text-gray-600 fa-solid fa-calendar-days"></i>
      </div>

      <i className=" text-gray-400 fa-solid fa-chart-bar" />
      <i className=" text-gray-400 fa-solid fa-gear" />
    </div>
  );
};

export default Menu_footer;
