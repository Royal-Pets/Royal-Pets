import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Profilemenu from "./Profilemenu";
import Dogs from "../assets/dogs.png";
import "../Profile.css";

export class FullProfile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
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
        </div>
      </div>
    );
  }
}

export default FullProfile;
