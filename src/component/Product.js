import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div style={{ textAlign: "center" }}>
                    <div style={{ textAlign: "center",display:"inline-block",margin:"40px"  }}>

          <Card>
            <Card.Img variant="top" src={this.props.image} width={350} height={450}  />
            <Card.Body>
              <Card.Title>Product name : {this.props.productName}</Card.Title>
              <Card.Text>
                Its For : {this.props.itsFor}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"> Price : {this.props.Price}</small>
            </Card.Footer>
            {/* <Button variant="addToCart">Add to cart</Button> */}
            <Button variant="secondary" size="lg">
    Add to cart 
  </Button>
          </Card>
        

        
      </div>
    );
  }
}

export default Product;
