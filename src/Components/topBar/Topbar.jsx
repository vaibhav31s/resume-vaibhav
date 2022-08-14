import React from "react";
import "./topbar.scss";
// import {Person, Mail} from "@material-ui/icons"
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" classNa me="logo">VAIBHAV.</a>
          <div className="itemContainer">
          </div>
        </div>
        <div className="right">
          <a href="#portfolio">This is right</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

//  <a href="#works">works</a>
{/* <a href="#testimonials">Testinomials</a> */}