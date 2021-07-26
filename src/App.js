import LoginButton from './components/Login'
import LogoutButton from './components/logout'
import Profile from './components/profile';
// import Header from './component/Header'
import Main from './component/Main'
// import Footer from './component/Footer'
import './App.css';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showrequest: false,
      showsomthing: true,
      showanotherpage: false
    }
  }


  requestFunc = async () => {
    await this.setState({
      showrequest: false,
      showsomthing: false,
      showanotherpage: true
    })
  }

  somthingFunc = async () => {
    await this.setState({
      showrequest: true,
      showsomthing: false,
      showanotherpage: false
    })
  }

  anotherpageFunc = async () => {
    await this.setState({
      showrequest: false,
      showsomthing: true,
      showanotherpage: false
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <AboutUs/>
        <Footer/>
        {/* <Header /> */}
 <div className="App">
      <Home/>
    </div>
        <Main />
        <div>
        <LoginButton />
        <LogoutButton />
        <Profile showrequest={this.showrequest} showsomthing={this.showsomthing} showanotherpage={this.showanotherpage}/>
        {
          this.state.showrequest &&   ///    if(  true && true   )
          <somthing />  //   true
        }

        {
          this.state.showsomthing &&
          <somthing1 />
        }


        {
          this.state.showanotherpage &&
          <somthing2 />
        }

      </div>
        {/* <Footer /> */}
      </div>
    )
  }
}



export default App