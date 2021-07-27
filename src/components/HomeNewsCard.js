import React from "react";
import { Card } from "react-bootstrap";
import "./CSS/HomeNewsCard.css";

class HomeNewsCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="mb-5 newsSection">
          {this.props.newsData.map((ele) => {
            return (
              <Card className="newsSectionCard" style={{ width: "18rem", border: "none", height: "22rem" }}>
                <Card.Body className="d-flex flex-column">
                  <div style={{ width: "auto", height: "12rem" }}>

                    <div style={{ borderRadius: "16px",overflow:"hidden", height: "180px", marginBottom: "1rem" }} >
                      <Card.Img variant="top" src={ele.image} style={{ borderRadius: "16px", objectFit: "cover", height: "180px" }} />
                    </div>
                    
                    <Card.Title>{ele.desc}</Card.Title>
                  </div>

                  <div className="mt-auto" style={{ marginLeft: "auto", marginRight: "auto", overflow:"hidden" }}>
                    <a href="" style={{ textDecoration: "none" }}>
                      <span style={{ textAlign: "center" }}>Read more →</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </>
    );
  }
}

export default HomeNewsCard;
