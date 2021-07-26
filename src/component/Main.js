import React from "react";
import products from "./products.json";
import Product from "./Product";
import FilterProduct from "./FilterProduct";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      itsFor: "",
      Price: "",
      image: "",
      products: products.map((p) => {
        return (
          <Product
            productName={p.productName}
            itsFor={p.itsFor}
            Price={p.Price}
            image={p.image}
          />
        );
      }),
    };
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      products: products
        .filter((p) => {
          if (e.target.value == "All") return true;
          else {
            return p.itsFor == e.target.value;
          }
        })
        .map((p) => {
          return (
            <Product
              productName={p.productName}
              itsFor={p.itsFor}
              Price={p.Price}
              image={p.image}
            />
          );
        }),
    });

    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <FilterProduct submitForm={this.submitForm} />
        {this.state.products}
      </div>
    );
  }
}
export default Main;
