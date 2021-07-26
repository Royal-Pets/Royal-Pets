import React, { Component } from 'react';
import {
    Container, Row, Carousel, Modal, Button, Card
} from 'react-bootstrap';
import img1 from './Images/download.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
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
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}   
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <div className="home-top-section">
                        <h1 className="home-title">We Have Everything Your Pet Needs.</h1>
                    </div>
                </Row>
                <Row className="home-video-section">
                    <Button style={{ width: '7rem' }} variant="primary" onClick={() => { this.handleModal() }} >
                        <FontAwesomeIcon icon={faPlay}/>
                    </Button>
                    <Modal show={this.state.show} className="home-video-modal" onHide={() => this.handleModal()}>
                        <Modal.Body>
                            <iframe width="465" height="315" src="https://www.youtube.com/embed/8o_myFa_hzo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Modal.Body>
                    </Modal>
                </Row>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Our History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Our Products</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>About Us</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Our Vision</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

export default Home
