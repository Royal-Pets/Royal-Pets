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
        <Card className="messagesCard">
          <Card.Body>
            <Card.Title>From: {this.props.message.sender}</Card.Title>
            <hr style={{ border: "thin dotted var(--main-color)" }}></hr>
            <Card.Title>To: {this.props.message.receiver}</Card.Title>
            <hr style={{ border: "thin dotted var(--main-color)" }}></hr>
            <Card.Text>
              <div style={{display:"flex", gap: "1rem"}}>
                <div>
                  <div style={{ fontWeight: "bold", color: "var(--main-color)" }}>Title</div>
                  <div style={{ fontWeight: "bold", color: "var(--main-color)" }}>Message</div>
                </div>
                <div>
                  <div>{this.props.message.title}</div>
                  <div>{this.props.message.message}</div>
                </div>
              </div>
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
