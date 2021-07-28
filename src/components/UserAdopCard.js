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
      .delete(`${process.env.REACT_APP_HOST}/removeAdopt`, this.props.req)
      .then((resultData) => {
        this.props.renderCards();
      });
  };
  /**
   *
   * @param {Event} e
   */

  render() {
    return (
      <>
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
                    <button onClick={this.removeCard}>Remove </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuth0(UserAdopCard);
