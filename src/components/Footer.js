import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { withAuth0 } from "@auth0/auth0-react";

import "./CSS/Footer.css";
import Logo from "../Images/logo_white_vetrical.png";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <div className="footerLogo">
            <img src={Logo}></img>
          </div>
          <div className="technologies">
            <h2>Technologies used</h2>
            <p>React</p>
            <p>Bootstrap</p>
            <p>Express - axios</p>
            <p>Mongoose - MongoDB</p>
            <p>Coffee</p>
          </div>
          <div className="contactLinks">
            <h2>Contact</h2>
            <p>Email</p>
            <p>Buy us a coffee</p>
            <p>Donate for animal rights</p>
          </div>
          <div className="followLinks">
            <p>
              <FaGithub />
            </p>
            <p>
              <FaFacebookF />
            </p>
            <p>
              <FaLinkedinIn />
            </p>
            <p>
              <FaTwitter />
            </p>
          </div>
        </div>

        <div className="copyrightDivContainer">
          <div className="copyrightDiv">Copyright &copy; 2021 Poyal Pets - All Rights Reserved</div>
        </div>
      </footer>
    );
  }
}

export default withAuth0(Footer);
