import React from "react";
import products from "./products.json";
import Product from "./Product";
import FilterProduct from "./FilterProduct";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: [],
      productName: "",
      itsFor: "",
      Price: "",
      image: "",
      products: null,
      index: 0,
    };
  }
  componentDidMount() {
    this.setState({
      products: products.map((p) => {
        return <Product productName={p.productName} itsFor={p.itsFor} Price={p.Price} image={p.image} addtoCart={this.onclickCart} cartProduct={this.state.cartProduct} removeItem={this.removeProduct} index={this.state.index} clearCart={this.clearCart} />;
      }),
    });
  }

  clearCart = () => {
    this.setState({ cartProduct: new Array() });
  };

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
          return <Product productName={p.productName} itsFor={p.itsFor} Price={p.Price} image={p.image} addtoCart={this.onclickCart} cartProduct={this.state.cartProduct} removeItem={this.removeProduct} index={this.state.index} clearCart={this.clearCart} />;
        }),
    });

    console.log(e.target.value);
  };

  onclickCart = (productName, itsFor, Price, image) => {
    console.log(this.state.cartProduct);
    this.state.cartProduct.push({
      index: this.state.index++,
      productName: productName,
      itsFor: itsFor,
      Price: Price,
      image: image,
    });
    this.setState({
      cartProduct: this.state.cartProduct,
    });
  };

  removeProduct = (index) => {
    this.state.cartProduct.splice(index, 1);
    this.setState({
      cartProduct: this.state.cartProduct,
    });
  };

  render() {
    // const { user, isAuthenticated } = this.props.auth0;

    return (
      <>
        <div className="productPage">
          <FilterProduct submitForm={this.submitForm} />
          <div className="storeProductsContainer">{this.state.products}</div>
        </div>
      </>
    );
  }
}
export default withAuth0(Main);
