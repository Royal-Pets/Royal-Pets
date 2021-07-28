import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./component/Main";
import Home from "./Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import AdoptList from "./components/AdoptList";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showrequest: false,
      showsomthing: true,
      showanotherpage: false,
    };
  }

  requestFunc = async () => {
    await this.setState({
      showrequest: false,
      showsomthing: false,
      showanotherpage: true,
    });
  };

  somthingFunc = async () => {
    await this.setState({
      showrequest: true,
      showsomthing: false,
      showanotherpage: false,
    });
  };

  anotherpageFunc = async () => {
    await this.setState({
      showrequest: false,
      showsomthing: true,
      showanotherpage: false,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <Link style={{ textDecoration: "none", color: "unset" }} to="/">
                  Royal Pets
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "unset" }}
                    to="/"
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "unset" }}
                    to="/store"
                  >
                    Store
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "unset" }}
                    to="/adopt"
                  >
                    Adopt
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "unset" }}
                    to="/about"
                  >
                    About Us
                  </Link>
                </Nav.Link>
                {this.props.auth0.isAuthenticated ? (
                  <Nav.Link>
                    <Link
                      style={{ textDecoration: "none", color: "unset" }}
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </Nav.Link>
                ) : null}
              </Nav>

              {this.props.auth0.isAuthenticated ? (
                <LogoutButton />
              ) : (
                <LoginButton />
              )}
            </Container>
          </Navbar>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/adopt">
              <AdoptList />
            </Route>
            <Route path="/store">
              <Main />
            </Route>
            <Route path="/profile">
              <Profile  />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
      //       <div>
      //         <AboutUs/>

      //  <div className="App">
      //       <Home/>
      //     </div>
      //         <Main />
      //         <div>
      //         <LoginButton />
      //         <LogoutButton />
      //         <Profile showrequest={this.showrequest} showsomthing={this.showsomthing} showanotherpage={this.showanotherpage}/>
      //         {
      //           this.state.showrequest &&   ///    if(  true && true   )
      //           <somthing />  //   true
      //         }

      //         {
      //           this.state.showsomthing &&
      //           <somthing1 />
      //         }

      //         {
      //           this.state.showanotherpage &&
      //           <somthing2 />
      //         }

      //       </div>
      //       </div>
    );
  }
}

export default withAuth0(App);
