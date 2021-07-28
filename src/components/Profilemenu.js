import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import OffcanvasMenu from "react-offcanvas-menu-component";
import LogoutButton from "./LogoutButton";

class Profilemenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    return (
      <div style={{ margin: "110px", textAlign: "center", zIndex: "99" }}>
        <div className="checkAllAdoptablesContainer">
          <button
            style={{
              display: "block",
              margin: "20px",
              width: "100%",
              fontFamily: 'Varela Round',
            }}
            className="float-end checkAllAdoptables"
            variant="link"
            onClick={this.props.showrequest}
          >
            Requests
          </button>
        </div>

        <div className="checkAllAdoptablesContainer">
          <button
            style={{
              display: "block",
              margin: "20px",
              width: "100%",
              fontFamily: 'Varela Round',
            }}
            className="float-end checkAllAdoptables"
            variant="link"
            onClick={this.props.showmessages}
          >
            Messages
          </button>
        </div>

        <div className="checkAllAdoptablesContainer">
          <button
            style={{
              display: "block",
              margin: "20px",
              width: "100%",
              fontFamily: 'Varela Round',
            }}
            className="float-end checkAllAdoptables"
            variant="link"
            onClick={() => {
              const logout = this.props.auth0.logout;
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default withAuth0(Profilemenu);
