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
import RAnk_icon from "../Components/RAnk/RAnk_icon";
import Time from "../Components/Time_view/Time";
import Classes from "../Components/Subject_classes/Classes";

const Home = () => {
  return (
    <Layout footer={<Footer_menu />} header={<New_Header />} bgColor="bg-white">
      <div className="p-[20px] ">
        <UserProfile />
        <br />
        <div className="row  border-2 border-gray-100 rounded">
          <div className="col-4">
            <Student_card
              Detail="Student"
              icon="fas fa-graduation-cap"
              caption="2nd year"
            />
          </div>
          <div className="col-4 border-x-2 border-gray-100  my-2">
            <Student_card Detail="Presence" icon="fas fa-user" caption="100%" />
          </div>
          <div className="col-4">
            <Student_card
              Detail="Internal Score"
              icon="fab fa-leanpub"
              caption="85/100"
            />
          </div>
        </div>
        <br />

        <div className="flex">
          <RAnk_icon icons="fas fa-graduation-cap" title="Classes" />
          <RAnk_icon icons="fa-solid fa-file-lines" title="Exam" />
          <RAnk_icon icons="fa-solid fa-copy" title="Assignment" />
          <RAnk_icon icons="fas fa-user-large" title="Presence" />
          <RAnk_icon icons="fa-solid fa-ellipsis-vertical" title="More" />
        </div>
      </div>
      <br />
      <Time />
      <br/>
    


<Classes Colors="bg-violet-500" MOnth="Jan" Date="21" Subject="Economy Class"/>
<Classes Colors="bg-amber-500"  MOnth="Feb" Date="22" Subject="Geography Class"/>
<Classes Colors="bg-blue-500"  MOnth="Mar" Date="23" Subject="Accountancy Class"/>



    </Layout>
  );
};

export default Home;
