import React, { Component } from "react";
import { Card, Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export class UserAdopCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  removeCard = () => {
    //remove
    axios
      .delete("https://royal-pets.herokuapp.com/removeAdopt", this.props.req)
      .then((resultData) => {});
  };
  /**
   *
   * @param {Event} e
   */

  render() {
    return (
      <>
        <Card style={{ margin: "35px auto", width: "50%" }}>
          <Card.Img
            variant="top"
            src={this.props.req.img_url}
            style={{ height: "300px", width: "100%", padding: "20px" }}
          />
          <Card.Body>
            <Card.Title>Name: {this.props.req.pet}</Card.Title>
            <Card.Text>Owner: {this.props.req.owner}</Card.Text>
            <Card.Text>Description: {this.props.req.description}</Card.Text>
            <Button
              variant="danger"
              onClick={this.removeCard}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "5px 40px",
              }}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withAuth0(UserAdopCard);
