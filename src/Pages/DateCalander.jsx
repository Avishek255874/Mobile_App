import React from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Item_Add from "../Components/Footer/Item_Add";
import Menu_footer from "../Components/Footer/Menu_footer";
import Task_header from "../Components/Header/Task_header";
import Task_detail from "../Components/Header/Task_detail";
import Taskdetail_tab from "../Components/Taskdetail_tab/Taskdetail_tab";
import StudentDetail from "../Components/StudentDetail/StudentDetail";

const DateCalander = () => {
  return <Layout footer={<Menu_footer />} header={<Task_detail />}>
  <Taskdetail_tab/>
  <br/>
  <StudentDetail/>
  </Layout>;
};

export default DateCalander;
