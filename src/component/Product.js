import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cart from "./Cart";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMo: false,
    };
  }
  handleClose = () => this.setState({ showMo: false });
  handleShow = () => this.setState({ showMo: true });

  render() {
    return (
     
      <div
        style={{ textAlign: "center", display: "inline-block", margin: "40px" }}
      >
        <Cart
          image={this.props.image}
          productName={this.props.productName}
          Price={this.props.Price}
          handleClose={this.handleClose}
          showMo={this.state.showMo}
        />
        <Card className="product" >
          <Card.Img
          variant="top"
           height="300" style={{ width: "auto", margin: "1rem", borderRadius: "16px", objectFit: "cover" }}
            src={this.props.image}
            
          />
          <Card.Body>
            <Card.Title>Product name : {this.props.productName}</Card.Title>
            <Card.Text>Its For : {this.props.itsFor}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Price : {this.props.Price}</small>
          </Card.Footer>
        

          <Button onClick={this.handleShow}> Add to cart </Button>
        </Card>
      </div>
    );
  }
}

export default Product;
