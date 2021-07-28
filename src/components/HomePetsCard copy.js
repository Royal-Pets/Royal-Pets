import React from "react";
import { Card } from "react-bootstrap";
import "./CSS/HomePetsCard.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
                  <Card.Title className="titleAndAge"><div>{ele.title}</div><div>{ele.age}</div></Card.Title>
                  <Card.Text>{ele.text}</Card.Text>
                  <div className="ButtonContainer mt-auto"><button>
                    Contact my owner
                  </button></div>
                  
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Link to="/adopt"> 
        <div className="checkAllAdoptablesContainer"><button className="float-end checkAllAdoptables" >CHECK ALL OF OUR ADOPTABLES</button></div>
        </Link>
        </div>
      </>
    );
  }
}

export default HomePetsCard;
