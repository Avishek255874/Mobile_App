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
    <NavLink to="/DateCalander" activeClassName="text-lime-300">
      <div class="rounded-circle text-center h-12 w-12 bg-lime-300 drop-shadow-lg d-flex justify-content-center align-items-center">
      <i className=" text-gray-600 fa-solid fa-list-check"/>
      </div>
    </NavLink>
    
    <NavLink to="/GraphData" activeClassName="text-lime-300">   
       <i className=" text-gray-400 fa-solid fa-chart-bar" />

    </NavLink>
    <NavLink to="/Setting" activeClassName="text-lime-300">
      <i className=" text-gray-400 fa-solid fa-gear" />
      </NavLink>
    </div>
  );
};

export default Menu_footer;
