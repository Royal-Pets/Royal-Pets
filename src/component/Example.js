import React, { Component } from "react";
import { Button, Offcanvas, ListGroup, Modal, Form } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";


export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      Formshow: false,
      products: null,
      showItems: true,
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
    this.FormhandleClose();
    this.handleClose();
    // this.props.clearCart();
    this.setState({ showItems: false });
    //   axios
    //     .post("http://localhost:3002/addmessage", messageObj)
    //     .then((resultData) => {
    //       console.log(resultData[0]);
    //     });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  addToCart = () => {
    this.setState({ showItems: true });

    this.props.auth0.isAuthenticated && this.props.addtoCart(this.props.productName, this.props.itsFor, this.props.Price, this.props.image);
    this.props.auth0.isAuthenticated && this.handleShow();
  };

  removeFromCart = () => {
    this.props.removeItem(this.props.index);
    this.setState({
      products: this.props.cartProduct.map((ele) => (
        <>
          <ListGroup.Item>
            {ele.productName} <br />
            {ele.Price} {" $"}
          </ListGroup.Item>
          <Button variant="primary" onClick={this.removeFromCart}>
            Remove
          </Button>
        </>
      )),
    });
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <>
        <Button variant="primary" onClick={this.addToCart}>
          Add to cart
        </Button>

        <Offcanvas show={this.state.show} onHide={this.handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart <img style={{height:"30px"}} src="http://simpleicon.com/wp-content/uploads/Shopping-Cart-9.png"/></Offcanvas.Title>
          </Offcanvas.Header>
          {this.state.showItems && (
            <Offcanvas.Body>
              <ListGroup>
                {this.props.cartProduct.map((ele) => (
                  <div className="namePriceAndRemove">
                    <ListGroup.Item className="priceAndNameExample">
                      <p>{ele.productName}</p>
                      <p>
                        {" $"}
                        {ele.Price}
                      </p>
                    </ListGroup.Item>
                    <Button className="btnDangerExample" variant="danger" onClick={this.removeFromCart}>
                      Remove
                    </Button>
                  </div>
                ))}
              </ListGroup>
              <br />
              <h3>
                <span style={{ fontSize: "24px", color: "rgb(92, 92, 92)" }}>Total : </span>
                {this.props.cartProduct.reduce((acc, ele) => (acc += Number(ele.Price)), 0)} $
              </h3>
            </Offcanvas.Body>
          )}
          <Button className="exampleCheckoutBtn" style={{ borderRadius: "0" , backgroundColor: "var(--main-color)", border:"none"}}  onClick={this.FormhandleShow}>
            Checkout
          </Button>
        </Offcanvas>

        <Modal show={this.state.Formshow} onHide={this.FormhandleClose}>
          <div className="paymentModal" >
          <Modal.Header>
            <Modal.Title>Payment Receipt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitForm}>
              <Form.Control name="title" type="text" placeholder="Your Name" />
              <br />
              <Form.Control name="title" type="text" placeholder="Street Address" />
              <br />
              <Form.Control name="title" type="text" placeholder="Street Address Line 2" />
              <br />
              <Form.Control name="title" type="text" placeholder="City" />
              <br />
              <Form.Control name="title" type="text" placeholder="Postal / Zip Code" />
              <br />
              <Form.Label>Date</Form.Label>
              <Form.Control name="title" type="text" placeholder="mm-dd-yyyy" />
              <br />
              <Form.Label>Payment Method</Form.Label> &nbsp; &nbsp;
              <Form.Check inline type="radio" name="pay" label="Card" />
              <Form.Check inline type="radio" name="pay" label="Check" />
              <Form.Check inline type="radio" name="pay" label="Cash" />
              
              <br />
              <br />
              <br />

              <Button className="storeCheckoutButton" type="submit" variant="primary" style={{ display: "block", margin: "0 auto" }}>
                Pay
              </Button>
            </Form>
          </Modal.Body></div>
        </Modal>
      </>
    );
  }
}

export default withAuth0(Example);
