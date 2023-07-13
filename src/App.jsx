import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import NavBarData from "./Components/NavBar/NavBarData";


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
     
      <NavBarData/>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
