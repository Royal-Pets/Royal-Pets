import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";

export class Masseges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  /**
   *
   * @param {Event} e
   */

  render() {
    return (
      <>
        <Card
          style={{
            margin: "35px auto",
            width: "35%",
            background: "rgba(255, 255, 255, 0.3)",
            border: "1px solid black",
            borderRadius: "50px",
            padding: "20px",
          }}
        >
          <Card.Body>
            <Card.Title>From: {this.props.message.sender}</Card.Title>
            <Card.Title>To: {this.props.message.receiver}</Card.Title>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Title: </span>
              {this.props.message.title}
              <br />
              <span style={{ fontWeight: "bold" }}>Message: </span> {<br />}{" "}
              {this.props.message.message}
            </Card.Text>

            {/* <Button
              variant="danger"
              onClick={this.removeCard}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "5px 40px",
              }}
            >
              Remove
            </Button> */}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withAuth0(Masseges);
