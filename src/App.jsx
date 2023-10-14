import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";

import Menu from "./Pages/Menu";
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
