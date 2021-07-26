import React, { Component } from "react";
import { Container, Row, Carousel, Modal, Button, Card } from "react-bootstrap";
import img1 from "./Images/1536x600 cat looking to the side.jpg";
import img2 from "./Images/1536x600 rabbit looking at viewer.jpg";
import img3 from "./Images/1536x600 guinea pigs1.jpg";
import imgCard from "./Images/cardimage1.jpg";
import imgCard2 from "./Images/cardimage2.jpg";
import imgCard3 from "./Images/cardimage3.jpg";
import imgCard4 from "./Images/cardimage4.jpg";
import imgCard5 from "./Images/41217047470_45aa7a4651_k.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

import HomePetsCard from "./components/HomePetsCard";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      petsData: [
        {
          image: imgCard,
          title: "Island wide Delivery",
          text: "We cover all cities in Jordan",
        },
        {
          image: imgCard4,
          title: "Best Care Buyer Protection",
          text: "If Goods have Problems",
        },
        {
          image: imgCard3,
          title: "Secure Payment",
          text: "100% Secure payments for online transactions",
        },
        {
          image: imgCard2,
          title: "24/7 Support",
          text: "Dedicated support",
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
            <Carousel.Item>
              <img height="600" className="d-block w-100" src={img1} alt="First slide" />
              <Carousel.Caption>
                <h1>Professional Advice</h1>
                <p>Whether it's a quick question over the phone or a second-opinion consultation, we're here & waiting</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img height="600" className="d-block w-100" src={img2} alt="Second slide" />
              <Carousel.Caption>
                <h1>Your Pet Comes First</h1>
                <p>Health care from your pet's point of view means we treat your pet as you would like to be treated yourself</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img height="600" className="d-block w-100" src={img3} alt="Third slide" />
              <Carousel.Caption>
                <h1>Value for Money Health care Basics</h1>
                <p>Ask about our competitively priced vaccinations, desexes and wellness dentals</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <div className="homeMainBody">
          <Row className="mb-5 newSection">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Button variant="primary">Our adoption page</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Button variant="primary">Our adoption page</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Button variant="primary">Our adoption page</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Img variant="top" src={imgCard} height="180" />
                <Card.Title>Timmy</Card.Title>
                <Card.Text>Our newest cat, Timmy! in need for a....</Card.Text>
                <Button variant="primary">Our adoption page</Button>
              </Card.Body>
            </Card>
          </Row>

          <div className="homeAboutUs">
            <img src={imgCard5} />
            <div className="homeAboutUsText">
              <h2>No animals left in need</h2>
              <p>Since our launch in 1986, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations. We then provide them with the best possible care and enrichment until we can help them find their forever homes.</p>
              <button style={{ width: "fit-content", backgroundColor: "unset", border: "unset", color: "black", padding: "unset" }}>Read More About Us →</button>
            </div>
          </div>
          <div className="ourPros">
            <div>
              <img src={img3} />
              <h2>Our Values</h2>
              <p>
                Everything we do at Royal-Pets – from the way we greet you on the phone, to the way we introduce a new service or train a new team member, is underpinned by the following seven core values:
                <br></br>★ Excellence ★ Care ★ Innovation ★ Professionalism ★ Consistency ★ Enjoyment ★ Value for money ★
              </p>
            </div>
            <div>
              <img src={img3} />
              <h2>Our Mission</h2>
              <p>To provide innovative, high-quality, consistent, value-for-money, pet friendly health care that will make your pet want to come back again…and again.</p>
            </div>

            <div>
              <img src={img3} />
              <h2>Our Motto</h2>
              <p>…is “Health care from your pet’s point of view.”</p>
            </div>
            <div>
              <img src={img3} />
              <h2>Our Vision</h2>
              <p>
                5 years from now, Pet Universe will be the ultimate professional veterinary practice that combines excellent healthcare delivered in a consistent, innovative, enjoyable, caring and pet-friendly way to create a value-for-money yet profitable and unforgettable service experience from our:
                <br></br>★ Pet’s Point of View ★ Client’s Point of View ★ Staff’s point of view ★ Platinum Partner’s Point Of View ★ Owner’s Point of View ★
              </p>
            </div>
          </div>

          <HomePetsCard petsData={this.state.petsData} />

          <Row className="home-video-section mb-5">
            <h2>Inside the mind of animals</h2>
            <Button
              style={{ width: "50rem", height: "30rem", position: "relative", padding: "0.75rem" }}
              variant="primary"
              onClick={() => {
                this.handleModal();
              }}
            >
              <img src={img1} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              <FontAwesomeIcon className="playIcon" icon={faPlay} />
            </Button>

            <Modal show={this.state.show} className="home-video-modal" onHide={() => this.handleModal()}>
              <Modal.Body>
                <iframe width="465" height="315" src="https://www.youtube.com/embed/BDJ8xyQjyhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Modal.Body>
            </Modal>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Home;
