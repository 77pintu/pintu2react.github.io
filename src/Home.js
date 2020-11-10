import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/images/web.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Welcome Home page"
        imgsrc={Web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
