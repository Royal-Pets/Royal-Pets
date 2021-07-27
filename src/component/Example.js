import React, { Component } from 'react'
import { Button, Offcanvas, ListGroup, Modal, Form } from "react-bootstrap";


export class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            Formshow: false,
            products: null

        };
    }

    FormhandleClose = () => this.setState({ Formshow: false });
    FormhandleShow = () => this.setState({ Formshow: true });

    /**
     *
     * @param {Event} e
     */
    submitForm = (e) => {
        e.preventDefault();

        let messageObj = {
            sender: this.props.auth0.user.email,
            receiver: this.props.req.email,
            title: e.target.title.value,
            message: e.target.message.value,
        };
        //   axios
        //     .post("http://localhost:3002/addmessage", messageObj)
        //     .then((resultData) => {
        //       console.log(resultData[0]);
        //     });
    };


    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    addToCart = () => {

        this.props.addtoCart(this.props.productName, this.props.itsFor, this.props.Price, this.props.image);
        this.handleShow();
    }

    removeFromCart = () => {
        this.props.removeItem(this.props.index);
        this.setState({
            products: this.props.cartProduct.map(ele =>
                <>
                    <ListGroup.Item>{ele.productName} <br></br>{ele.Price}</ListGroup.Item>
                    <Button variant="primary" onClick={this.removeFromCart}>
                        Remove
                    </Button>
                </>


            )
        })
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.addToCart}>
                    Add to cart
                </Button>

                <Offcanvas show={this.state.show} onHide={this.handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ListGroup>
                            {this.props.cartProduct.map(ele =>
                                <>
                                    <ListGroup.Item>{ele.productName} <br></br>{ele.Price}</ListGroup.Item>
                                    <Button variant="primary" onClick={this.removeFromCart}>
                                        Remove
                                    </Button>
                                </>


                            )}
                        </ListGroup>
                        <h1>{this.props.cartProduct.reduce((acc, ele) => acc += Number(ele.Price), 0)} $</h1>
                    </Offcanvas.Body>
                    <Button variant="danger" onClick={this.FormhandleShow}>
                        Checkout
                    </Button>
                </Offcanvas>


                <Modal show={this.state.Formshow} onHide={this.FormhandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Payment Receipt</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.submitForm}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Your Name"
                            />
                            <br />
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Street Address"
                            />
                            <br />
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Street Address Line 2"
                            />
                            <br />
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="City"
                            />
                            <br />
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="Postal / Zip Code"
                            />
                            <br />
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                placeholder="mm-dd-yyyy"
                            />
                            <br />
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Check type="checkbox" label="Card" />                                
                            <Form.Check type="checkbox" label="Check" />                                
                            <Form.Check type="checkbox" label="Cash" />                                
                            <br />

                            <Button
                                type="submit"
                                variant="primary"
                                onClick={this.FormhandleClose}
                                style={{ display: "block", margin: "0 auto" }}
                            >
                                Send
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
                
            </>
        )
    }
}

export default Example;



