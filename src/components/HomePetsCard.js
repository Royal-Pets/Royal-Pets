import React from "react";
import { Card, Button, Row } from "react-bootstrap";

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
              <Card className="shadow" style={{ width: "18rem", borderRadius: "28px", border: "unset" }}>
                <Card.Img variant="top" src={ele.image} height="180" style={{ width: "auto", margin: "1rem", borderRadius: "16px", objectFit: "cover" }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{ele.title}</Card.Title>
                  <Card.Text>{ele.text}</Card.Text>
                  <Button className="mt-auto" style={{ alignSelf: "flex end",borderRadius: "16px" }} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Button className="float-end" style={{fontSize:"24px",borderRadius: "24px"}}>CHECK ALL OF OUR ADOPTEES</Button>
        </div>
      </>
    );
  }
}

export default HomePetsCard;
