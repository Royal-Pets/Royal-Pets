import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "../component/Main";
import Home from "../Home";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
// import { withAuth0 } from '@auth0/auth0-react';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Royal Pets</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/store">Store</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutUs />
              <Footer />
            </Route>
            <Route path="/store">
              <Main />
              <Footer />
            </Route>
            <Route path="/">
              <Home />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
    {
      /* {isAuthenticated ? <LogoutButton/> : <LoginButton/>} */
    }
  }
}

export default Header;
