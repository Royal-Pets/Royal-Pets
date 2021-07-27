import React from "react";
import { Card, Button } from "react-bootstrap/";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Maram from "./members/IMG_0502.JPG";
import Ghaidaa from './members/ghaidaa.jpg'
import Omar from './members/omar.png'
import Saleem from './members/saleem.jpg'
import Suhaib from './members/suhaib.jpg'
import Taima from './members/taima.jpg'
import '../AboutUs.css'
import { withAuth0 } from "@auth0/auth0-react";

export class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <div className="firstSec">
          <div className="memberCard">
            <Card className="text-center" border="success" style={{ width: "18rem", height:"600px" }}>
              <Card.Img height="350px" variant="top" src={Omar} />
              <Card.Body>
                <Card.Title>Omar Alazaizeh</Card.Title>
                <Card.Text>Computer Science</Card.Text>
                <div>
                  <ul>
                    <li>
                    <a href=' https://github.com/Omx302'> <FaGithub /></a>
                     
                    </li>
                    <li>
                    <a href='https://www.linkedin.com/in/omar-alazaizeh-590015131/'> <FaLinkedinIn /></a>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="memberCard">
            <Card className="text-center" style={{ width: "18rem", height:"600px" }}>
              <Card.Img variant="top" src={Ghaidaa} />
              <Card.Body>
                <Card.Title>Ghaidaa Alnattah</Card.Title>
                <Card.Text>Management information system</Card.Text>
                <div>
                  <ul>
                    <li>
                    <a href='https://github.com/Ghaidaamoh'> <FaGithub /></a>
                    </li>
                    <li>
                      
                    <a href='https://www.linkedin.com/in/ghaidaa-mohammad'> <FaLinkedinIn /></a>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="memberCard">
            <Card className="text-center" style={{ width: "18rem", height:"600px" }}>
              <Card.Img variant="top" src={Maram} />
              <Card.Body>
                <Card.Title>Maram Abu Murad</Card.Title>
                <Card.Text>Business Administration</Card.Text>
                <div>
                  <ul>
                    <li>
                    <a href='https://github.com/Maram-997'> <FaGithub /></a>
                    </li>
                    <li>
                      
                    <a href='https://www.linkedin.com/in/maram-abu-murad-9a0282195'> <FaLinkedinIn /></a>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="secSection">
          <div className="memberCard">
            <Card className="text-center" style={{ width: "18rem", height:"600px" }}>
              <Card.Img  variant="top" src={Saleem} />
              <Card.Body>
                <Card.Title>Saleem Diab</Card.Title>
                <Card.Text>Civil Engineering</Card.Text>
                <div>
                  <ul>
                    <li>
                    <a href='https://github.com/saleem-ux'> <FaGithub /></a>
                    </li>
                    <li>
                     
                    <a href='https://www.linkedin.com/in/saleem-diab-3a3306210/'> <FaLinkedinIn /></a>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="memberCard">
            <Card className="text-center" style={{ width: "18rem", height:"600px" }}>
              <Card.Img variant="top" src={Suhaib} />
              <Card.Body>
                <Card.Title>Suhaib Ersan</Card.Title>
                <Card.Text>Graphic Design</Card.Text>
                <div>
                  <ul>
                    <li>
                      <a href='https://github.com/Suhaib-Ersan'><FaGithub /></a>
                      
                    </li>
                    <li>
                     
                    <a href='https://www.linkedin.com/in/suhaib-ersan/'> <FaLinkedinIn /></a>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="memberCard">
            <Card className="text-center" style={{ width: "18rem", height:"600px" }}>
              <Card.Img height="345px" variant="top" src={Taima} />
              <Card.Body>
                <Card.Title>Taima Al-hajjaj</Card.Title>
                <Card.Text>Business Administration</Card.Text>
                <div>
                  <ul>
                    <li>
                    <a href='https://github.com/talhajjaj'> <FaGithub /></a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/in/taima-alhajaj-17372a180'> <FaLinkedinIn /></a>
                   
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(AboutUs);
