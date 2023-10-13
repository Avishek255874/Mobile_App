import React from "react";
import Layout from "../Components/Layout/Layout";
import Menu_footer from "../Components/Footer/Menu_footer";

const Cart_Bar = () => {
  return (
    <Layout footer={<Menu_footer/>} bgColor="bg-red">
      <h1>Home</h1>
    </Layout>
  );
};

export default Cart_Bar;
