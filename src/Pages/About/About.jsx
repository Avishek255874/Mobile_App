
import { useState } from "react";
import Profile_header from "../../Components/Header/Profile_header";
import Layout from "../../Components/Layout/Layout";
import Footer_menu from "../../Components/Footer/Footer_menu";
import Menu_footer from "../../Components/Footer/Menu_footer";

const About = () => {
 
  return (
    <Layout footer={<Menu_footer /> } bgColor="bg-white"> 
    <h1>About</h1>
    
    </Layout>
  );
};

export default About;
