import axios from "axios";
import React, { Component } from "react";
import Masseges from "./Masseges";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

export class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: null,
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  componentDidMount() {
    axios
      .get(`http://localhost:3002/messages?email=${this.props.auth.user.email}`)
      .then((resultData) => {
        console.log(resultData.data);
        this.setState({
          requests: resultData.data.map((req) => <Masseges message={req} />),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div>{this.state.requests}</div>;
      </>
    );
  }
}

export default withAuth0(MessageList);
