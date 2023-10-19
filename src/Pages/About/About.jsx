import { useState } from "react";
import Profile_header from "../../Components/Header/Profile_header";
import Layout from "../../Components/Layout/Layout";
import Footer_menu from "../../Components/Footer/Footer_menu";
import Menu_footer from "../../Components/Footer/Menu_footer";
import Back_header from "../../Components/Header/Back_header";
import Task_header from "../../Components/Header/Task_header";
import Task from "../../Components/Task/Task";
import Tab_bar from "../../Components/Tab_bar/Tab_bar";
import Task_card from "../../Components/Task_CArd/Task_card";
import { Cards } from "../../utils/Card";

const About = () => {
  return (
    <Layout
      footer={<Footer_menu />}
      header={<Task_header />}
      bgColor="bg-white"
    >
      <div className="p-[15px] ">
        <Tab_bar />
      </div>
      <Task />

      <div className="flex justify-between items-center">
        {Cards?.map((i) => (
          <Task_card
            circletext={i?.circletext}
            Name={i?.Name}
            Uppertext={i?.Uppertext}
            middletext={i?.middletext}
            buttomtext={i?.buttomtext}
            Myphoto={i?.Myphoto} 
            BgcoloR={i?.BgcoloR}
            TextColor={i?.TextColor}
            RoundColor={i?.RoundColor}
            />
        ))}
      </div>

    </Layout>
  );
};

export default About;
