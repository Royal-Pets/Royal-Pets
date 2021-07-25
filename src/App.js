
import React from 'react'
// import Header from './component/Header'
import Main from './component/Main'
// import Footer from './component/Footer'
import './App.css';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div>

        {/* <Header /> */}
 <div className="App">
      <Home/>
    </div>
        <Main />

        {/* <Footer /> */}
      </div>
    )
  }



export default App