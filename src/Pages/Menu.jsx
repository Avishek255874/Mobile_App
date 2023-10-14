import React from "react";
import Layout from "../Components/Layout/Layout";
import Menu_footer from "../Components/Footer/Menu_footer";
import Profile_header from "../Components/Header/Profile_header";
import Item_Add from "../Components/Footer/Item_Add";

const Menu = () => {
  return (
    <Layout footer={<Item_Add />} header={<Profile_header />} >
      <h1>Menu</h1>
    </Layout>
  );
};

export default Menu;
