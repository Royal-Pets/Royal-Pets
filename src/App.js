import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <AboutUs/>
        <Footer/>
      </div>
    )
  }
}

export default App

