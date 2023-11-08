import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Menu from "./Pages/Menu";
import DateCalander from "./Pages/DateCalander";
import GraphData from "./Pages/GraphData";
import Setting from "./Pages/Setting";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/about",
      element:<About/>,
    },
    {
      path: "/DateCalander",
      element:<DateCalander/>,
    },
    {
      path: "/GraphData",
      element:<GraphData/>,
    },
    {
      path: "/Setting",
      element:<Setting/>,
    },
    {
      path: "/menu",
      element:<Menu/>,
    },
  ]);
  

  return (
    <div>
     
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
