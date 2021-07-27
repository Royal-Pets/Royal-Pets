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
      // <>
      //   {/* <OffcanvasMenu
      //     menu={[
      //       { text: "Home", link: "/" },
      //       {
      //         text: "Pages",
      //         link: "/page",
      //         submenu: [
      //           { text: "Page 1", link: "/page/1" },
      //           { text: "Page 2", link: "/page/2" },
      //         ],
      //       },
      //       { text: "Contact", link: "/contact" },
      //     ]}
      //   /> */}
      //   {/* <Button variant="primary" onClick={this.handleShow}>
      //     Launch
      //   </Button>

      //   <Offcanvas show={this.state.show} onHide={this.handleClose}>
      //     <Offcanvas.Header closeButton>
      //       <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      //     </Offcanvas.Header>
      //     <Offcanvas.Body>
      //       <Nav
      //         style={{ fontSize: "34px" }}
      //         defaultActiveKey="/home"
      //         className="flex-column"
      //       >
      //         <Nav.Link href="/home">Active</Nav.Link>
      //         <Nav.Link eventKey="link-1">Link</Nav.Link>
      //         <Nav.Link eventKey="link-2">Link</Nav.Link>
      //         <Nav.Link eventKey="disabled" disabled>
      //           Disabled
      //         </Nav.Link>
      //       </Nav>
      //     </Offcanvas.Body>
      //   </Offcanvas> */}
      // </>
      // <div style={{ margin: "25px", textAlign: "center" }}>
      //   <Button
      //     style={{ display: "block", margin: "20px", width: "100%" }}
      //     onClick={this.props.requestFunc}
      //     variant="primary"
      //   >
      //     request
      //   </Button>

      //   <Button
      //     style={{ display: "block", margin: "20px", width: "100%" }}
      //     onClick={this.props.somthingFunc}
      //     variant="success"
      //   >
      //     somthing
      //   </Button>

      //   <Button
      //     style={{ display: "block", margin: "20px", width: "100%" }}
      //     onClick={this.props.showanotherpage}
      //     variant="warning"
      //   >
      //     anotherpage
      //   </Button>
      // </div>
      <div style={{ margin: "25px", textAlign: "center" }}>
       
         
        <Button
          style={{ display: "block", margin: "20px", width: "100%",textDecoration:'none',fontWeight:'50px',color:'gray' }}
          onClick={this.props.requestFunc}
          variant="link"
        >
          request
        </Button>

        <Button
          style={{ display: "block", margin: "20px", width: "100%",textDecoration:'none',fontWeight:'50px',color:'gray' }}
          onClick={this.props.somthingFunc}
          variant="link"
        >
          somthing
        </Button>

        <Button
          style={{ display: "block", margin: "20px", width: "100%",textDecoration:'none',fontWeight:'50px',color:'gray'}}
          onClick={this.props.showanotherpage}
          variant="link"
        >
          anotherpage
        </Button>
      </div>
    );
  }
}

export default withAuth0(Profilemenu);
