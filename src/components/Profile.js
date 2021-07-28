import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Profilemenu from "./Profilemenu";
import Dogs from "../assets/dogs.png";
import "../Profile.css";
import UserRequests from "./UserRequests";
import MessageList from "./MessageList";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null,
    };
  }

  showrequest = () => {
    this.setState({ page: <UserRequests auth={this.props.auth0} /> });
  };
  showmessages = () => {
    this.setState({ page: <MessageList auth={this.props.auth0} /> });
  };
  showlogout = () => {};
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div>
        {isAuthenticated && (
          <>
            <div style={{ width: "50%", float: "right", position: "relative" }}>
              <img style={{ width: "100%" }} src={Dogs} alt="image" />
              <div
                style={{
                  position: "absolute",
                  width: "60%",
                  left: "-480px",
                  top: "190px",
                }}
                class="box"
              ></div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "-460px",
                  top: "190px",
                }}
              >
                <br />

                <img
                  style={{ width: "15%" }}
                  src={user && user.picture}
                  alt="Profile"
                  className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
                <br />
                <h2 style={{ fontFamily: "serif", fontWeight: "bolder" }}>
                  {user.name}{" "}
                </h2>
                <br />
                <h3 style={{ fontFamily: "serif", fontWeight: "bolder" }}>
                  {user.email}
                </h3>
                {/* <Card style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={user && user.picture} alt="profile" style={{ width: "30%", marginLeft: '106px',borderRadius:'20%' }} />
                  <Card.Body>
                    <Card.Title>{user.name}
                    </Card.Title>
                    <Card.Text>
                      {user.email}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                {/* </Card.Body>
                </Card> */}
              </div>

              <div
                style={{
                  width: "30%",
                  top: "0",
                  position: "absolute",
                  left: "-800px",
                  height: "100%",
                  paddingTop: "4%",
                  zIndex: "10",
                  fontFamily: "serif",
                }}
              >
                {isAuthenticated && (
                  <Profilemenu
                    showrequest={this.showrequest}
                    showmessages={this.showmessages}
                    showlogout={this.showlogout}
                  />
                )}
              </div>
            </div>
            <br style={{ clear: "both" }} />
            {this.state.page}
          </>
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
