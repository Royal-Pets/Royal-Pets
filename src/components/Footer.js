import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export class Footer extends React.Component {
  render() {
    return (
      <div className="footerCSS">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            Copyright &copy; 2021 Poyal Pets - All Rights Reserved
          </Navbar.Brand>
          <div>
            <ul>
              <li>
                <FaGithub />
              </li>
              <li>
                {" "}
                <FaFacebookF />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
