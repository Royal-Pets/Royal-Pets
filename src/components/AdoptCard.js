import React, { Component } from "react";
import { Card, Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
    let message = e.target.message.value;
    let title = e.target.title.value;

    // if submited should be add to db using axios
    console.log(title, message);
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
        <Card style={{ margin: "35px auto", width: "50%" }}>
          <Card.Img
            variant="top"
            src={this.props.req.img}
            style={{ height: "300px", width: "850PX", padding: "20px" }}
          />
          <Card.Body>
            <Card.Title>{this.props.req.pet}</Card.Title>
            <Card.Text>{this.props.req.owner}</Card.Text>
            <Card.Text>{this.props.req.description}</Card.Text>
            <Button
              variant="danger"
              onClick={this.handleShow}
              style={{ display: "block", margin: "0 auto" }}
            >
              Contact
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AdoptCard;
