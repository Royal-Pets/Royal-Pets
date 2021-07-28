import React from "react";
import { Card } from "react-bootstrap";
import "./CSS/HomePetsCard.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Fade from "react-reveal/Fade";

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
          <Fade top>
            {" "}
            <div className="h2OfAdopteesContainer">
              <Fade bottom cascade>
                <h2 className="m-3">Searching for a home</h2>
              </Fade>
            </div>
          </Fade>
          <Fade bottom cascade>
            <div className="ourAdoptees">
              {this.props.petsData.map((ele, idx) => {
                return (
                  <Card>
                    <div className="cardBodyAndShadow"></div>
                    <Card.Img
                      variant="top"
                      src={ele.image}
                      height="180"
                      style={{
                        width: "auto",
                        margin: "1rem",
                        borderRadius: "16px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="titleAndAge">
                        <div>{ele.title}</div>
                        <div>{ele.age}</div>
                      </Card.Title>
                      <Card.Text>{ele.text}</Card.Text>


                      <div className="mt-auto ButtonContainer">
                        <Link to={ele.destination}>
                          <button>{ele.buyText}</button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Fade>
          <Link to="/adopt">
            <Fade bottom cascade>
              <div className="checkAllAdoptablesContainer">
                <button className="float-end checkAllAdoptables">CHECK OUT MORE</button>
              </div>
            </Fade>
          </Link>
          <br style={{ clear: "both" }} />
      </>
    );
  }
}

export default HomePetsCard;
