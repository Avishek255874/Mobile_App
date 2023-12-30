import React from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Item_Add from "../Components/Footer/Item_Add";
import Menu_footer from "../Components/Footer/Menu_footer";
import Task_header from "../Components/Header/Task_header";
import Task_detail from "../Components/Header/Task_detail";
import Taskdetail_tab from "../Components/Taskdetail_tab/Taskdetail_tab";
import StudentDetail from "../Components/StudentDetail/StudentDetail";
import Assigment_task from "../Components/StudentDetail/Assigment_task/Assigment_task";

const DateCalander = () => {
  return <Layout footer={<Menu_footer />} header={<Task_detail />} bgColor="bg-white">
  <Taskdetail_tab/>
  <br/>
  <StudentDetail/>
  <Assigment_task/>
  </Layout>;
};

export default DateCalander;
