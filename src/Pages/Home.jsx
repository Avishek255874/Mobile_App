import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header"

const Home = () => {
  
  return (
   
  <Layout header={<Profile_header/> } bgColor="bg-white"> 
  <h1>Home</h1>
  
  </Layout>
  )
}

export default Home