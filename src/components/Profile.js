import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
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
      <div className="profileDiv">
        {isAuthenticated && (
          <>
            <div>
              <div
                style={{
                  position: "absolute",
                  width: "60%",
                  right: "-100px",
                  height: "100%",
                  zIndex: "-1",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "0 0",
                  }}
                  src={Dogs}
                  alt="image"
                />
              </div>
              <div
                style={{
                  position: "relative",
                  width: "60%",
                }}
                class="box"
              >
                <div
                  className="profilePageImgAndName"
                  style={{
                    width: "100%",
                  }}
                >
                  <img
                    style={{ width: "15%" }}
                    src={user && user.picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                  />
                  <div>
                    <h2 style={{ fontFamily: "serif", fontWeight: "bolder" }}>
                      {user.name}{" "}
                    </h2>
                    <h3 style={{ fontFamily: "serif", fontWeight: "bolder" }}>
                      {user.email}
                    </h3>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "30%",
                  top: "0",
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
