import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import Profilemenu from "./Profilemenu";

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div>
        {isAuthenticated && (
          <>
            <div
              style={{ width: "50%", float: "right", position: "relative" }}
            >
              <img
                style={{ width: "100%" }}
                src="https://static.vecteezy.com/system/resources/previews/002/075/608/original/cute-bunny-and-butterfly-cartoon-animal-illustration-vector.jpg"
                alt="image"
              />
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  left:'-500px',
                  top: "200px",
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
                <h2>{user.name} </h2>
                <br />
                <h3>{user.email}</h3>
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
                  height:'100%',
                  paddingTop:'4%',
                   background:'#ffecf2',
                   zIndex:'-1'
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
