import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Profilemenu from "./Profilemenu";
class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div style={{ background: "#d5f5e9" }}>
        {isAuthenticated && (
          <>
            <div
              style={{ width: "100%", float: "right", position: "relative" }}
            >
              <img
                style={{ width: "100%" }}
                src="https://lostpawsrescueoftexas.org/wp-content/uploads/2019/09/Lost-Paws-Rescue-of-Texas-100-Dog-and-Cat-Adoptions-Each-Year-1024x512.jpg"
                alt="image"
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  textAlign: "center",
                  top: "480px",
                }}
              >
                <img
                  style={{ width: "20%" }}
                  src={user && user.picture}
                  alt="Profile"
                  className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
                <br />
                <h2>{user.name} </h2>
                <br />
                <h3>{user.email}</h3>
              </div>

              <div
                style={{
                  width: "30%",
                  top: "65%",
                  position: "absolute",
                  left: "0",
                }}
              >
                {isAuthenticated && (
                  <Profilemenu
                    showrequest={this.props.showrequest}
                    showsomthing={this.props.showsomthing}
                    showanotherpage={this.props.showanotherpage}
                  />
                )}
              </div>
            </div>
            <br style={{ clear: "both" }} />
          </>
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
