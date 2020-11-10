import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/images/web.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome About page"
        imgsrc={Web}
        visit="/contact"
        btnname="contact now"
      />
    </>
  );
};

export default About;
