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
import { Schedule } from "../utils";
import reactImage from "../assets/class.svg";
import documentImg from "../assets/docment.svg"
import fileImg from "../assets/fileImg.svg"
import userImg from "../assets/userImg.svg"
import moreImg from "../assets/moreImg.svg"
import bookImg from "../assets/book.svg"




const Home = () => {
  return (
    <Layout footer={<Menu_footer/>} header={<New_Header />} bgColor="bg-white">
      <div className="p-[20px] ">
        <UserProfile />
 
        <br />
        <div className="row  border-2 border-gray-100 rounded">
          <div className="col-4">
            <Student_card
              Detail="Student"
              icon={reactImage}
              caption="2nd year"
            />
          </div>
          <div className="col-4 border-x-2 border-gray-100  my-2">
            <Student_card Detail="Presence" icon={userImg} caption="100%" />
          </div>
          <div className="col-4">
            <Student_card
              Detail="Internal Score"
              icon={bookImg}
              caption="85/100"
            />
          </div>
        </div>
        <br />

        <div className="flex">
        
        <RAnk_icon icons={reactImage} title="Classes"/>
        <RAnk_icon icons={documentImg} title="Exam" />
          <RAnk_icon icons={fileImg} title="Assignment" />
          <RAnk_icon icons={userImg} title="Presence"/>
          <RAnk_icon icons={moreImg} title="More"/>
        </div>
      </div>
      <br />
      <Time iconss="fa-regular fa-calendar" Schedule="Schedule" view="View All" />
      <br/>
      {Schedule?.map(i=>(
        <Classes Colors={i?.color} MOnth={i?.Month} Date={i?.date} Subject={i?.Subject} room={i?.roomDetail} Time={i?.time}/>

        ))}

 </Layout>
  );
};

export default Home;
