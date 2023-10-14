
import { useState } from "react";
import Profile_header from "../../Components/Header/Profile_header";
import Layout from "../../Components/Layout/Layout";
import Footer_menu from "../../Components/Footer/Footer_menu";
import Menu_footer from "../../Components/Footer/Menu_footer";
import Back_header from "../../Components/Header/Back_header";

const About = () => {
 
  return (
    <Layout footer={<Footer_menu/> } header={<Back_header/>}  bgColor="bg-white"> 
    <h1>About</h1>
    <h1>About</h1>
    <h1>About</h1>
    
    </Layout>
  );
};

export default About;
