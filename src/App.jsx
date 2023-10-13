import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";


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
  ]);
  

  return (
    <div>
     
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
