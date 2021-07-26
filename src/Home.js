import React, { Component } from 'react';
import {
    Container, Row, Carousel, Modal, Button, Card
} from 'react-bootstrap';
import img1 from './Images/slide2.jpg';
import img2 from './Images/dogs-and-cats-1-638.webp';
import img3 from './Images/slide3.jpg';
import imgCard from './Images/cardimage1.jpg';
import imgCard2 from './Images/cardimage2.jpg';
import imgCard3 from './Images/cardimage3.jpg';
import imgCard4 from './Images/cardimage4.jpg';
import imgCard5 from './Images/41217047470_45aa7a4651_k.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }


    render() {
        return (
            <Container fluid className="home-page">
                <Row className="home-top-background-section">
                    <Carousel className='slide-show'>
                        <Carousel.Item interval={1000}>
                            <img height='600'
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Professional Advice</h3>
                                <p>Whether it's a quick question over the phone or a second-opinion consultation, we're here & waiting</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img height='600'
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Your Pet Comes First</h3>
                                <p>Healthcare from your pet's point of view means we treat your pet as you would like to be treated yourself</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height='600'
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Value for Money Healthcare Basics</h3>
                                <p>Ask about our competitively priced vaccinations, desexes and wellness dentals</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>


                <Row>
                    <div className="home-top-section">
                        <h1 className="home-title">Our newest pets, they need a sweet home</h1>
                    </div>
                </Row>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard} height='180' />
                            <Card.Title>Timmy</Card.Title>
                            <Card.Text>
                                Our newest cat, Timmy! in need for a....
                            </Card.Text>
                            <Button variant="primary">Our adoption page</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard} height='180' />
                            <Card.Title>Timmy</Card.Title>
                            <Card.Text>
                                Our newest cat, Timmy! in need for a....
                            </Card.Text>
                            <Button variant="primary">Our adoption page</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard} height='180' />
                            <Card.Title>Timmy</Card.Title>
                            <Card.Text>
                                Our newest cat, Timmy! in need for a....
                            </Card.Text>
                            <Button variant="primary">Our adoption page</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard} height='180' />
                            <Card.Title>Timmy</Card.Title>
                            <Card.Text>
                                Our newest cat, Timmy! in need for a....
                            </Card.Text>
                            <Button variant="primary">Our adoption page</Button>
                        </Card.Body>
                    </Card>
                </Row>

                <Row>
                    <img src={imgCard5} />
                    <h2>No animals left in need</h2>
                    <p>Since our launch in 1986, we transfer in dogs and cats from public shelters where they are in danger of being euthanized due to space or financial limitations. We then provide them with the best possible care and enrichment until we can help them find their forever homes.</p>
                </Row>
                <Row>
                    <img src={img3}/>
                    <h2>Our Values</h2>
                    <p>Everything we do at Royal-Pets – from the way we greet you on the phone, to the way we introduce a new service or train a new team member, is underpinned by the following seven core values:
                        <br></br>
                        ★ Excellence ★ Care ★ Innovation ★ Professionalism ★ Consistency ★ Enjoyment ★ Value for money ★
                    </p>
                    <br></br>
                    <img src={img3}/>
                    <h2>Our Mission</h2>
                    <p>To provide innovative, high-quality, consistent, value-for-money, pet friendly health care that will make your pet want to come back again…and again.</p>
                    <br></br>

                    <img src={img3}/>
                    <h2>Our Motto</h2>
                    <p>…is “Health care from your pet’s point of view.”</p>
                    <br></br>

                    <img src={img3}/>
                    <h2>Our Vision</h2>
                    <p>5 years from now, Pet Universe will be the ultimate professional veterinary practice that combines excellent healthcare delivered in a consistent, innovative, enjoyable, caring and pet-friendly way to create a value-for-money yet profitable and unforgettable service experience from our:
                        <br></br>
                        ★ Pet’s Point of View ★ Client’s Point of View ★ Staff’s point of view ★ Platinum Partner’s Point Of View ★ Owner’s Point of View ★
                    </p>
                </Row>

                <Row>
                    <h2>Thats why you choose us</h2>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard} height='180' />
                            <Card.Title>Island wide Delivery</Card.Title>
                            <Card.Text>
                                We cover all cities in Jordan
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard4} height='180' />
                            <Card.Title>Best Care Buyer Protection</Card.Title>
                            <Card.Text>
                                If Goods have Problems
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard3} height='180' />

                            <Card.Title>Secure Payment</Card.Title>
                            <Card.Text>
                                100% Secure payments for online transactions
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={imgCard2} height='180' />
                            <Card.Title>24/7 Support</Card.Title>
                            <Card.Text>
                                Dedicated support
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Row>



                <Row className="home-video-section">
                    <h2>Inside the mind of animals</h2>
                    <Button style={{ width: '50rem', height: '30rem' }} variant="primary" onClick={() => { this.handleModal() }} >
                        <FontAwesomeIcon icon={faPlay} />
                    </Button>
                    <Modal show={this.state.show} className="home-video-modal" onHide={() => this.handleModal()}>
                        <Modal.Body>
                            <iframe width="465" height="315" src="https://www.youtube.com/embed/BDJ8xyQjyhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal.Body>
                    </Modal>
                </Row>


            </Container>
        )
    }
}

export default Home