import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Footer_menu from "../Components/Footer/Footer_menu";
import Menu_footer from "../Components/Footer/Menu_footer";
import Back_header from "../Components/Header/Back_header";
import Follow_card from "../Components/Card/Follow_card";
import New_Header from "../Components/Header/New_Header";
import UserProfile from "../Components/UserProfile/UserProfile";
import Student_card from "../Components/Student-info/Student_card";

const Home = () => {
  return (
    <Layout footer={<Menu_footer />} header={<New_Header />} bgColor="bg-red">
      <UserProfile />
      <div className="flex w-full items-center justify-between p-2 border-2  border-gray-100 rounded ">
        <Student_card
          Detail="Student"
          icon="fas fa-graduation-cap"
          caption="2nd year"
        />
        <Student_card
          Detail="Presence"
          bOrder="border-x-2 border-gray-100"
          icon="fas fa-user"
          caption="100%"
        />
        <Student_card
          Detail="Internal Score"
          icon="fab fa-leanpub"
          caption="85/100"
        />
      </div>
    </Layout>
  );
};

export default Home;
