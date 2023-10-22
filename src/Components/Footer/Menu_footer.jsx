import React from "react";
import { NavLink } from "react-router-dom";
const Menu_footer = () => {
  return (
    <div className="w-full flex items-center  justify-between px-3 cursor-pointer  ">
      <NavLink to="/" activeClassName="text-lime-300">
        <i className="text-gray-500 fa-solid fa-house" />
      </NavLink>
    <NavLink to="/about" activeClassName="text-lime-300">
          <i className=" text-gray-400 fa-solid fa-folder-closed" />

    </NavLink>  
      <div class="rounded-circle text-center h-12 w-12 bg-lime-300 drop-shadow-lg d-flex justify-content-center align-items-center">
        <i class=" text-gray-600 fa-solid fa-calendar-days"></i>
      </div>

      <i className=" text-gray-400 fa-solid fa-chart-bar" />
      <i className=" text-gray-400 fa-solid fa-gear" />
    </div>
  );
};

export default Menu_footer;
