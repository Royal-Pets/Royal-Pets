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
import './components/Header.css'
import Logo from "./Images/image.png"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "") {
          this.setState({ status: "" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar className='navbar-header' fixed="top"
            variant="dark"
            className="navbar-header"
            id="mynav"
            style={{
              backgroundColor:
                this.state.status === "top"
                  ? "rgba(0, 0, 0, 0.0)"
                  : "rgba(0, 0, 0, 1)",
              boxShadow:
                this.state.status === "top"
                  ? "0 8px 8px rgba(0, 0, 0, 0)"
                  : "0 8px 8px rgba(0, 0, 0, 0.308)",
              transition: "1s",
            }}
          >
            <Container>
              <Navbar.Brand href="/">
                <div className='logo'>
                  <Link style={{ textDecoration: "none", color: "unset" }} to="/">
                  <img src={Logo} style={{width:'17rem', height:'4rem'}}/>
                  </Link>
                </div>
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
