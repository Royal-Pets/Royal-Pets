import "./App.css";
import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./component/Main";
import Home from "./Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import AdoptList from "./components/AdoptList";
import Profile from "./components/Profile";
import LoginButton from "./components/LoginButton";
import "./index.css";
import "./components/Header.css";
import Logo from "./Images/logo_purple.png";

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
          <Navbar
            className="navbar-header"
            fixed="top"
            variant="dark"
            className="navbar-header"
            id="mynav"
            style={{
              backgroundColor: "var(--main-background-color)",
              boxShadow:
                this.state.status === "top"
                  ? "0 8px 8px rgba(0, 0, 0, 0)"
                  : "0 4px 4px rgba(0, 0, 0, 0.308)",
              transition: "1s",
              zIndex: "500000",
            }}
          >
            <Container className="headerContainer">
              <Navbar.Brand href="/">
                <div className="logo">
                  <Link to="/">
                    <img
                      src={Logo}
                      style={{ height: "45px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/store">Store</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/adopt">Adopt</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
                {this.props.auth0.isAuthenticated ? (
                  <Nav.Link>
                    <Link to="/profile">Profile</Link>
                  </Nav.Link>
                ) : null}
              </Nav>

              {this.props.auth0.isAuthenticated ? null : <LoginButton />}
            </Container>
          </Navbar>
          <div className="divider"></div>
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
              <Profile />
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
