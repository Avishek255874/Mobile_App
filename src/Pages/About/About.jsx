
import { useState } from "react";
import Profile_header from "../../Components/Header/Profile_header";
import Layout from "../../Components/Layout/Layout";

const About = () => {
 
  return (
    <Layout header={<Profile_header/> } bgColor="bg-white"> 
    <h1>About</h1>
    
    </Layout>
  );
};

export default About;
