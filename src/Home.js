import React, { Component } from "react";
import { Container, Row, Carousel, Modal, Button, Card } from "react-bootstrap";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

// import Aos from "aos";
// import "aos/dist/aos.css";

import img1 from "./Images/1536x600 cat looking to the side.jpg";
import img2 from "./Images/1536x600 rabbit looking at viewer.jpg";
import img3 from "./Images/1536x600 guinea pigs1.jpg";

import imgCard from "./Images/black cat looking at viewer.webp";
import imgCard2 from "./Images/750x750 orangeCat.jpg";
import imgCard3 from "./Images/750x750 kitten.jpg";
import imgCard4 from "./Images/750x750 whiteCat.jpg";
import imgCard5 from "./Images/41217047470_45aa7a4651_k.jpg";

import newsImgCard2 from "./Images/cat-ham.jpg";
import newsImgCard3 from "./Images/kitten cam.jpg";
import newsImgCard4 from "./Images/small rabbit.jpg";
import since from "./Images/since.jpg";
import ourProsImg1 from "./Images/image-grid-hearts.png";
import ourProsImg2 from "./Images/image-grid-house.png";
import ourProsImg3 from "./Images/image-grid-search.png";

import grassImg from "./Images/grass-background.jpg";
import rabbitImg from "./Images/rabbitPng.png";

import petsNeeds1 from "./Images/750x750 friskies.jpg";
// import petsNeeds2 from "https://i.pinimg.com/564x/7c/f6/30/7cf630ceb72dd3428025082f8cad5309.jpg";
import petsNeeds3 from "./Images/750x750 hamsterFood.jpg";
// import petsNeeds4 from "https://i.pinimg.com/564x/1c/60/53/1c60535f5f64062722761e92e1329785.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { Link } from "react-router-dom";
import HomePetsCard from "./components/HomePetsCard";
import HomeNewsCard from "./components/HomeNewsCard";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      petsData: [
        {
          image: imgCard,
          title: "Tom",
          text: "Happy to live in a new home, very good with other cats",
          age: "5 years",
          buyText: "Contact my owner",
          destination: "/adopt",
        },
        {
          image: "https://arabiclessonsjordan.files.wordpress.com/2013/12/1426498_506953999420720_2022641063_n.jpg",
          title: "umZaki",
          text: "A bit old, but happy and playful",
          age: "10 years",
          buyText: "Contact my owner",
          destination: "/adopt",
        },
        {
          image: imgCard3,
          title: "folfol",
          text: "New to the world, but still meowing hard!",
          age: "6 months",
          buyText: "Contact my owner",
          destination: "/adopt",
        },
        {
          image: imgCard2,
          title: "Sandy",
          text: "Sleeps a lot, but very calm",
          age: "1 year",
          buyText: "Contact my owner",
          destination: "/adopt",
        },
      ],
      petsNeedsData: [
        {
          image: petsNeeds1,
          title: "Purina Friskies Canned Cat Food",
          text: "Delicious taste she can't resist. Taurine helps support, healthy vision",
          age: "$20",
          buyText: "Buy",
          destination: "/store",
        },
        {
          image: "https://i.pinimg.com/564x/7c/f6/30/7cf630ceb72dd3428025082f8cad5309.jpg",
          title: "Salmoon Wet food",
          text: "Premium salmon wet food, for your special pet",
          age: "$30",
          buyText: "Buy",
          destination: "/store",
        },
        {
          image: petsNeeds3,
          title: "Wild Harvest Nutrition Diet",
          text: "Advanced Nutrition Diets In Flip Top Containers",
          age: "$10",
          buyText: "Buy",
          destination: "/store",
        },
        {
          image: "https://i.pinimg.com/564x/1c/60/53/1c60535f5f64062722761e92e1329785.jpg",
          title: "Strawberry Cave",
          text: "This extra comfortable strawberry themed bed will make you happy",
          age: "$99",
          buyText: "Buy",
          destination: "/store",
        },
      ],
      newsData: [
        {
          image: since,
          desc: "Five kittens all adopted at once, no one gets left behind in our team",
        },
        {
          image: newsImgCard2,
          desc: "What Happens Now? Preparing Your Pet for Life After COVID-19",
        },
        {
          image: newsImgCard3,
          desc: "OUR VIRTUAL KITTEN SHOWER IS LIVE!",
        },
        {
          image: newsImgCard4,
          desc: "Pet of the Week: Wanda the rabbit",
        },
      ],
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Container fluid className="home-page">
        <Row className="home-top-background-section mb-5">
          <Carousel className="slide-show">
            <Carousel.Item interval={3000}>
              <img height="600" className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption>
                <h1>Every pet deserves a happy life</h1>
                <p>with over 100k+ adoptions, we are inching to this goal each and every day</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img height="600" className="d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <h1>It's never been easier</h1>
                <p>with a healthy community and an always-active customer service, you will won't be lost before or after adopting</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img height="600" className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h1>Triple the trouble triple the fun</h1>
                <p>Bentley, Biscuit and Lucky are currently looking for a new loving home!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <div className="homeMainBody">
          <HomeNewsCard newsData={this.state.newsData} />
          {/* 
          <Row className="mb-5 newSection">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Link to="/adopt">
                  <Button variant="primary">Our adoption page</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                {" "}
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Link to="/adopt">
                  <Button variant="primary">Our adoption page</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Link to="/adopt">
                  <Button variant="primary">Our adoption page</Button>
                </Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Link to="/adopt">
                  <Button variant="primary">Our adoption page</Button>
                </Link>
              </Card.Body>
            </Card>
          </Row> */}

          <div className="homeAboutUs">
            <img src={imgCard5} />
            <div className="homeAboutUsText">
              <Fade top>
                {" "}
                <div className="noAnimalsContainer">
                  <Fade bottom cascade>
                    <h2>No animals left in need</h2>
                  </Fade>
                </div>
              </Fade>
              <Fade bottom>
                {" "}
                <p>
                  Since our launch in 1986, we have transferred over 20k pets from public shelters where they are in danger of being euthanized, due to space or financial limitations or any other reason. We then provide them with the best possible care until we can help them find their forever homes. <br />
                  That has always been our goal, and we're not perfect, but we've near-constantly reached it.
                </p>
              </Fade>
              <Link to="/about">
                <button
                  className="aboutUsButton"
                  style={{
                    width: "fit-content",
                    backgroundColor: "unset",
                    border: "unset",
                    color: "var(--main-color)",
                    padding: "unset",
                  }}
                >
                  <span>Read More About Us ???</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="ourPros">
            <div>
              <Fade cascade bottom>
                <div>
                  <Fade bottom>
                    {" "}
                    <div className="ourProsImgContainer">
                      <Fade top>
                        <img src={ourProsImg1} />
                      </Fade>
                    </div>
                  </Fade>

                  <Fade top>
                    {" "}
                    <div className="noAnimalsContainer">
                      <Fade bottom cascade>
                        <h2>Our Mission</h2>
                      </Fade>
                    </div>
                  </Fade>
                  <Fade bottom>
                    {" "}
                    <div className="ourProsTextContainer">
                      <Fade top>
                        <p style={{ overflow: "hidden" }}>
                          Everything we do at Royal-Pets we do with care, we have
                          <br></br>??? Excellence ??? Care ??? Innovation ??? Professionalism ??? Consistency ??? Enjoyment ??? Value for money ???
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
            <div>
              <Fade cascade bottom>
                <div>
                  <Fade bottom>
                    {" "}
                    <div className="ourProsImgContainer">
                      <Fade top>
                        <img src={ourProsImg2} />
                      </Fade>
                    </div>
                  </Fade>
                  <Fade bottom cascade>
                    {" "}
                    <div className="noAnimalsContainer">
                      <Fade top>
                        <h2>Finding a home</h2>
                      </Fade>
                    </div>
                  </Fade>

                  <Fade bottom>
                    {" "}
                    <div className="ourProsTextContainer">
                      <Fade top>
                        <p style={{ overflow: "hidden" }}>
                          To provide innovative, high-quality, consistent, value-for-money, pet friendly health care that will make your <br></br>
                          pet want to come back again???and again.
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>

            <div>
              <Fade cascade bottom>
                <div>
                  <Fade bottom>
                    {" "}
                    <div className="ourProsImgContainer">
                      <Fade top>
                        <img src={ourProsImg3} />
                      </Fade>
                    </div>
                  </Fade>
                  <Fade top>
                    {" "}
                    <div className="noAnimalsContainer">
                      <Fade bottom cascade>
                        <h2>Search for pets</h2>
                      </Fade>
                    </div>
                  </Fade>

                  <Fade bottom>
                    {" "}
                    <div className="ourProsTextContainer">
                      <Fade top>
                        <p style={{ whiteSpace: "wrap" }}>
                          Search, find and then contact, it's as easy as that! find your perfect pet through our limitless collection<br></br>
                        </p>
                      </Fade>
                    </div>
                  </Fade>
                </div>
              </Fade>
            </div>
          </div>
          <HomePetsCard petsData={this.state.petsData} />
          <HomePetsCard petsData={this.state.petsNeedsData} />

          {/* <Row className="home-video-section mb-5">
            <h2>Inside the mind of animals</h2>
            <Button
              style={{
                width: "50rem",
                height: "30rem",
                position: "relative",
                padding: "0.75rem",
              }}
              variant="primary"
              onClick={() => {
                this.handleModal();
              }}
            >
              <img
                src={img1}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <FontAwesomeIcon className="playIcon" icon={faPlay} />
            </Button>

            <Modal
              show={this.state.show}
              className="home-video-modal"
              onHide={() => this.handleModal()}
            >
              <Modal.Body>
                <iframe
                  width="465"
                  height="315"
                  src="https://www.youtube.com/embed/BDJ8xyQjyhM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Modal.Body>
            </Modal>
          </Row> */}
          <div className="grassThing">
            <img src={grassImg}></img>
            <div className="grassThingOverlay1"></div>
            <div className="grassThingOverlay2"></div>
            <img className="rabbitPng" src={rabbitImg}></img>

            <Fade top>
              {" "}
              <div className="grassThingH2Container1 grassThingH2Container">
                <Fade bottom cascade>
                  <h2 className="grassThingText1">50,000+<h6>Pets Saved</h6>
 </h2>
                </Fade>
              </div>
            </Fade>
            <Fade top>
              {" "}
              <div className="grassThingH2Container2 grassThingH2Container">
                <Fade bottom cascade>
                  <h2 className="grassThingText2">12,000+<h6>Animals Treated On Our Payroll</h6></h2>
                </Fade>
              </div>
            </Fade>
            <Fade top>
              {" "}
              <div className="grassThingH2Container3 grassThingH2Container">
                <Fade bottom cascade>
                  <h2 className="grassThingText3">500+<h6>Pets find a new home weekly</h6></h2>
                </Fade>
              </div>
            </Fade>
            <Fade top>
              {" "}
              <div className="grassThingH2Container4 grassThingH2Container">
                <Fade bottom cascade>
                  <h2 className="grassThingText4">80,000+<h6>Pets Needs Sold</h6></h2>
                </Fade>
              </div>
            </Fade>
            <Fade top>
              {" "}
              <div className="grassThingH2Container5 grassThingH2Container">
                <Fade bottom cascade>
                  <h2 className="grassThingText5">7,500+<h6>Pets Needs Donated</h6></h2>
                </Fade>
              </div>
            </Fade>

            <Fade top>
              {" "}
              <div className="grassThingH2Container6 grassThingH2Container">
                <Fade bottom cascade>
                  <h2 className="grassThingText6">Your Pets are in safe hands<h6>Through our multi-decade efforts, we have saved thousands of pets, and we're not stopping!</h6></h2>
                </Fade>
              </div>
            </Fade>
            
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
