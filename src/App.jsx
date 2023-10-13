import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Cart_Bar from "./Pages/Cart_Bar";

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
      path: "/about",
      element:<Cart_Bar/>,
    },
  ]);
  

  return (
    <div>
     
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
