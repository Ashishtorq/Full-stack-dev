import React, { Fragment } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <div id="nav-bar">
        <div id="logo">
          Yumi<span style={{ color: "#F9CD6C", fontSize: "23px" }}>Food</span>
        </div>
        <div id="navigations">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Offers</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div id="cart">
          <span id="hamburger">
            {" "}
            <GiHamburgerMenu />
          </span>
          <FaCartShopping />
        </div>
      </div>
    </Fragment>
  );
};
  
export default Header;




 {/*<div id="navigations">
   <RxCross1 id="cross" />
   <ul>
     <li>Home</li>
     <li>About Us</li>
     <li>Offers</li>
     <li>Sign Up</li>
   </ul>
</div>;*/}