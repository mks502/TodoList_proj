import React, { Component } from 'react';
import './App.css';

import Template from './BaseTemplate'
import axios from 'axios'
import { BASE_URL } from './BASE_SETTING'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleChange(e, target) {   // input onChange
    this.setState({
      [target]: e.target.value
    })
  }
  openModal(target) {
    this.setState({
      [target]: true,
    });
  }
  closeModal(target) {
    this.setState({
      [target]: false,
    });
  }


  render() {
    return (
      <div className="body m-2">

        <Template></Template>

      </div>
    );
  }
}

export default App;

