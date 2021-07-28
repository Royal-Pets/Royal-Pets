import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Maram from "./members/IMG_0502.JPG";
import Ghaidaa from "./members/ghaidaa.jpg";
import Omar from "./members/omar.png";
import Saleem from "./members/saleem.jpg";
import Suhaib from "./members/suhaib.jpg";
import Taima from "./members/taima.jpg";
import "../AboutUs.css";
import { withAuth0 } from "@auth0/auth0-react";

export class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <h1
          style={{
            textAlign: "center",
            margin: "50px 0 100px",
            fontSize: "64px",
            fontWeight: "bold",
          }}
        >
          Royal Team
        </h1>
        <div className="firstSec">
          <div className="container">
            <div className="main-container">
              <div className="imgcontainer">
                <a href="#">
                  <img src={Omar} class="photo" />
                </a>
              </div>
              <div className="bodycontainer">
                <div className="codycontent">
                  <h4 className="name">Omar Alazaizeh</h4>
                  <p className="major">Computer Science</p>
                  <ul className="socialmedia">
                    <li>
                      <a href=" https://github.com/Omx302">
                        {" "}
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/omar-alazaizeh-590015131/">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-container">
              <div className="imgcontainer">
                <a href="#">
                  <img src={Ghaidaa} class="photo" />
                </a>
              </div>
              <div className="bodycontainer">
                <div className="codycontent">
                  <h4 className="name">Ghaidaa Alnattah</h4>
                  <p className="major">Management information system</p>
                  <ul className="socialmedia">
                    <li>
                      <a href="https://github.com/Ghaidaamoh">
                        {" "}
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/ghaidaa-mohammad">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-container">
              <div className="imgcontainer">
                <a href="#">
                  <img src={Maram} class="photo" />
                </a>
              </div>
              <div className="bodycontainer">
                <div className="codycontent">
                  <h4 className="name">Maram Abu Murad</h4>
                  <p className="major">Business Administration</p>
                  <ul className="socialmedia">
                    <li>
                      <a href=" https://github.com/Omx302">
                        {" "}
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/omar-alazaizeh-590015131/">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secSection">
          <div className="container">
            <div className="main-container">
              <div className="imgcontainer">
                <a href="#">
                  <img src={Saleem} class="photo" />
                </a>
              </div>
              <div className="bodycontainer">
                <div className="codycontent">
                  <h4 className="name">Saleem Diab</h4>
                  <p className="major">Civil Engineering</p>
                  <ul className="socialmedia">
                    <li>
                      <a href=" https://github.com/Omx302">
                        {" "}
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/omar-alazaizeh-590015131/">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-container">
              <div className="imgcontainer">
                <a href="#">
                  <img src={Suhaib} class="photo" />
                </a>
              </div>
              <div className="bodycontainer">
                <div className="codycontent">
                  <h4 className="name">Suhaib Ersan</h4>
                  <p className="major">Graphic Design</p>
                  <ul className="socialmedia">
                    <li>
                      <a href=" https://github.com/Omx302">
                        {" "}
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/omar-alazaizeh-590015131/">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="main-container">
              <div className="imgcontainer">
                <a href="#">
                  <img src={Taima} class="photo" />
                </a>
              </div>
              <div className="bodycontainer">
                <div className="codycontent">
                  <h4 className="name">Taima Al-hajjaj</h4>
                  <p className="major">Business Administration</p>
                  <ul className="socialmedia">
                    <li>
                      <a href=" https://github.com/Omx302">
                        {" "}
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/omar-alazaizeh-590015131/">
                        {" "}
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(AboutUs);
