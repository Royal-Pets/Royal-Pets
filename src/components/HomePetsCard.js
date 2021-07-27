import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import "./CSS/HomePetsCard.css";

class HomePetsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.petsData);
  }
  render() {
    return (
      <>
      <div className="ourAdopteesContainer">
        <h2 className="m-3">Searching for a home</h2>
        <div className="ourAdoptees">
          {this.props.petsData.map((ele, idx) => {
            return (
              <Card>
                <div className="cardBodyAndShadow"></div>
                <Card.Img variant="top" src={ele.image} height="180" style={{ width: "auto", margin: "1rem", borderRadius: "16px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{ele.title}</Card.Title>
                  <Card.Text>{ele.text}</Card.Text>
                  <div className="ButtonContainer mt-auto"><Button style={{borderRadius: "16px" }} variant="primary">
                    Contact my owner
                  </Button></div>
                  
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Button className="float-end" style={{fontSize:"24px",borderRadius: "24px"}}>CHECK ALL OF OUR ADOPTABLES</Button>
        </div>
      </>
    );
  }
}

export default HomePetsCard;
