import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header"
import Footer_menu from "../Components/Footer/Footer_menu";
import Menu_footer from "../Components/Footer/Menu_footer";
import Back_header from "../Components/Header/Back_header";
import Follow_card from "../Components/Card/Follow_card";


const Home = () => {
  
  return (
   
    <Layout footer={<Menu_footer />}  header={<Profile_header/>} bgColor="bg-red"> 
<Follow_card/>
  </Layout>
  )
}

export default Home