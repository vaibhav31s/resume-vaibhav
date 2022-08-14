import React from "react";
import "./topbar.scss";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">VAIBHAV</a>
          <div className="itemContainer">
            <PersonIcon className="icon" color="yellow" /> 8805078063   
         
          </div>
          <div className="itemContainer"><EmailIcon className="icon" />  gawadvaibhavv@gmail.com</div>
          
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