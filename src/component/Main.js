import React from 'react';
import products from './products.json';
import Product from './Product';

class Main extends React.Component {


    render(){
    return <div>{products.map(p=>{
      return  <Product productName={p.productName} itsFor={p.itsFor} Price={p.Price} image={p.image}/>
    })}</div>

}}
export default Main;