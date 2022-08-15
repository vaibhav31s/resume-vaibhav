import React from "react";
import "./topbar.scss";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">VAIBHAV</a>
          <div className="itemContainer">
            <PersonIcon className="icon" color="yellow" /><span>8805078063</span>    
         
          </div>
          <div className="itemContainer"><EmailIcon className="icon" />  <span>gawadvaibhavv@gmail.com</span></div>
          
        </div>
        <div className="right" >
          <div className="hamburger"  onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1">  </span>
            <span className="line2">  </span>
            <span className="line3">  </span>
            

          </div>
          {/* <a href="#portfolio">This is right</a> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

//  <a href="#works">works</a>
{/* <a href="#testimonials">Testinomials</a> */}