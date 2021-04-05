import React, { Component } from "react"

import Provinces from './components/Provinces'
import Covid19 from "./components/Covid19"

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'about'
    }
  }

  render() {
    return (
      <div className="App">
 
        <div className="menu">
          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'about' })}>About Me</p>

          <p className="menu-item" onClick={() => this.setState({ selectedMenu: 'c' })}>My Town</p>
        </div>

        {this.state.selectedMenu === 'about' ?
          <Provinces />
          :
           <Covid19 />
        }
      </div>
    );
  }
}


export default App;
