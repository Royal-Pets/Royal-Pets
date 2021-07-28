import axios from "axios";
import React, { Component } from "react";
import AdoptCard from "./AdoptCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class AdoptList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: null,
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  submitForm = (e) => {
    e.preventDefault();
    let pet = e.target.pet.value;
    let description = e.target.description.value;
    let img_url = e.target.img.value;
    let bread = e.target.bread.value;
    let age = e.target.age.value;
    let adoptObj = {
      pet: pet,
      owner: this.props.auth0.user.name,
      email: this.props.auth0.user.email,
      age: age,
      bread: bread,
      description: description,
      img_url: img_url,
    };
    console.log(adoptObj);
    axios
      .post("https://royal-pets.herokuapp.com/addAdopt", adoptObj)
      .then((resultData) => {
        this.setState({
          requests: resultData.data.map((req) => <AdoptCard req={req} />),
        });
      });
  };
  componentDidMount() {
    axios
      .get("https://royal-pets.herokuapp.com/adoptList")
      .then((resultData) => {
        console.log(resultData.data);
        this.setState({
          requests: resultData.data.map((req) => <AdoptCard req={req} />),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Button
          variant="secondary"
          onClick={this.handleShow}
          style={{
            display: "block",
            padding: "5px 50px",
            margin: "20px",
            float: "right",
          }}
        >
          Add
        </Button>
        <br style={{ clear: "both" }} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Pet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitForm}>
              <Form.Control name="pet" type="text" placeholder="Name" />
              <br />
              <Form.Control name="bread" type="text" placeholder="Bread" />
              <br />
              <Form.Control name="age" type="text" placeholder="Age" />
              <br />
              <Form.Control name="img" type="text" placeholder="Img url" />
              <br />
              <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                  as="textarea"
                  placeholder="Leave your Message here"
                  name="description"
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
        <div>{this.state.requests}</div>;
      </>
    );
  }
}

export default withAuth0(AdoptList);
