import React from "react";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <>
        <Modal show={this.props.showMo} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              Added {this.props.productName} successfully{" "}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Image
              variant="top"
              src={this.props.image}
              alt={"alsa"}
              width={250}
            />
          </Modal.Body>

          <Modal.Footer>{this.props.Price}</Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Cart;
