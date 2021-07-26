import axios from "axios";
import React, { Component } from "react";
import AdoptCard from "./AdoptCard";

export class AdoptList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: null,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3002/adoptList")
      .then((resultData) => {
        console.log(resultData.data);
        this.setState({
          requests: resultData.data.map((req) => <AdoptCard req={req} />),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div>{this.state.requests}</div>;
  }
}

export default AdoptList;
