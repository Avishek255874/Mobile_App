import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Summary_box from "../../Components/summary/Summary_box";
import To_Do from "../../Components/To-Do_head/To_Do";
import { BoxCard } from "../../utils/BoxCard";

function Task_tab() {
  return (
    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="all" title={<To_Do Texts="All" number="25" />}>
     <Summary_box
              BgcoloR="bg-amber-200"
              RoundColor="bg-amber-300"
              TextColor="text-gray-400"
              circletext="To Do"
              Myphoto="https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/363374086_1982649622107457_5607490186300255942_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=whjVkRpAkmgAX8F5pIX&_nc_ht=scontent.fccu2-1.fna&oh=00_AfDN6rATZcLX6ItJOE0zZYpFhYIQzO3-v-1U5bo7hOLCug&oe=653711B9"
              Hightlight="Make a summary from a geography book on pages 25-35"
             
            />
 <br />
     <Summary_box
              BgcoloR="bg-teal-300"
              RoundColor="bg-teal-400"
              TextColor="text-gray-100"
              circletext="To Do"
              Myphoto="https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/363374086_1982649622107457_5607490186300255942_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=whjVkRpAkmgAX8F5pIX&_nc_ht=scontent.fccu2-1.fna&oh=00_AfDN6rATZcLX6ItJOE0zZYpFhYIQzO3-v-1U5bo7hOLCug&oe=653711B9"
              Hightlight="Make a summary from a geography book on pages 25-35"
             
            />
 <br />
     <Summary_box
              BgcoloR="bg-gradient-to-r from-amber-200   to-pink-300"
              RoundColor="bg-purple-400"
              TextColor="text-gray-100"
              circletext="To Do"
              Myphoto="https://scontent.fccu2-1.fna.fbcdn.net/v/t39.30808-6/363374086_1982649622107457_5607490186300255942_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=whjVkRpAkmgAX8F5pIX&_nc_ht=scontent.fccu2-1.fna&oh=00_AfDN6rATZcLX6ItJOE0zZYpFhYIQzO3-v-1U5bo7hOLCug&oe=653711B9"
              Hightlight="Make a summary from a geography book on pages 25-35"
             
            />

      </Tab>
      <Tab eventKey="todo" title={<To_Do Texts="To Do" number="5" />}>
        Tab content for Profile
      </Tab>
      <Tab eventKey="done" title={<To_Do Texts="Done" number="20" />}>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Task_tab;
