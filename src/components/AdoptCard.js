import React, { Component } from "react";
import { Card, Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export class AdoptCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

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
    axios
      .post("http://localhost:3002/addmessage", messageObj)
      .then((resultData) => {
        console.log(resultData[0]);
      });
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Owner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitForm}>
              <Form.Control
                name="title"
                type="text"
                placeholder="Message Title"
              />
              <br />
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave your Message here"
                  name="message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <br />
              <Button
                type="submit"
                variant="primary"
                onClick={this.handleClose}
                style={{ display: "block", margin: "0 auto" }}
              >
                Send
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

        <div>
          <div className="ourAdopteesContainer">
            <div className="ourAdoptees">
              <Card>
                <div className="cardBodyAndShadow"></div>
                <Card.Img
                  variant="top"
                  src={this.props.req.img_url}
                  height="180"
                  style={{
                    width: "auto",
                    margin: "1rem",
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="titleAndAge">
                    <div>{this.props.req.pet}</div>
                    <div>{this.props.req.age}</div>
                  </Card.Title>
                  <Card.Text>{this.props.req.description}</Card.Text>

                  <div className="mt-auto ButtonContainer">
                    <button onClick={this.handleShow}>Contact </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* <Card style={{ margin: "35px auto", width: "50%" }}>
          <Card.Img
            variant="top"
            src={this.props.req.img_url}
            style={{ height: "300px", width: "100%", padding: "20px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.req.pet}</Card.Title>
            <Card.Text>{this.props.req.owner}</Card.Text>
            <Card.Text>{this.props.req.description}</Card.Text>
            <Button
              variant="danger" 
              onClick={this.handleShow}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "5px 40px",
              }}
            >
              Contact
            </Button>
          </Card.Body>
        </Card> */}
      </>
    );
  }
}

export default withAuth0(AdoptCard);
