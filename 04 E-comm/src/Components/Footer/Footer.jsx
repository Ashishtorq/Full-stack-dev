import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="foot">
          <div className="row1">
            <strong>
              <p>Support</p>
            </strong>
            <p>Help Center</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability Support</p>
            <p>Cancellation</p>
            <p>Report Neighbour Concern</p>
          </div>
          <div className="row2">
            <strong>
              <p>Hosting</p>
            </strong>
            <p>Airbnb your home</p>
            <p>AirCover for Hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting responsibly</p>
          </div>
          <div className="row3">
            <strong>
              <p>Airbnb</p>
            </strong>
            <p>Newsroom</p>
            <p>New features</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Airbnb.org emergency stays</p>
          </div>
        </div>
        <p>
          {" "}
          All Copy Right Reseved &copy; <br /> This website is maintained and
          developed by Ashish Singh
        </p>
      </div>
    </div>
  );
};

export default Footer;
