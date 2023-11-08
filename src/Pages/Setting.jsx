import React from "react";
import Layout from "../Components/Layout/Layout";
import Menu_footer from "../Components/Footer/Menu_footer";
import Profile_header from "../Components/Header/Profile_header";

const Setting = () => {
  return (
    <Layout footer={<Menu_footer />} header={<Profile_header />}>
      <h1>Setting</h1>
    </Layout>
  );
};

export default Setting;
