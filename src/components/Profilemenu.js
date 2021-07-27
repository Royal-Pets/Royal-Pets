import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import OffcanvasMenu from "react-offcanvas-menu-component";

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
      <div style={{ margin: "25px", textAlign: "center" }}>
        <Button
          style={{ display: "block", margin: "20px", width: "100%" }}
          onClick={this.props.requestFunc}
          variant="primary"
        >
          request
        </Button>

        <Button
          style={{ display: "block", margin: "20px", width: "100%" }}
          onClick={this.props.somthingFunc}
          variant="success"
        >
          somthing
        </Button>

        <Button
          style={{ display: "block", margin: "20px", width: "100%" }}
          onClick={this.props.showanotherpage}
          variant="warning"
        >
          anotherpage
        </Button>
      </div>
    );
  }
}

export default withAuth0(Profilemenu);
