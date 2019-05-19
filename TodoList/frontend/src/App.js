import React, { Component } from 'react';
import './App.css';

import Template from './BaseTemplate'
import LoginPage from './LoginPage';
import axios from 'axios'
import {BASE_URL} from './BASE_SETTING'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logined: true,
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
  loginAPI() {
    const mem = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(mem)
    return axios.post(`${BASE_URL}/api/member/login`, mem)
      .then(
        (response) => {
          console.log(response)
        }
      )
  }


  render() {
    return (
      <div className="body m-2">
        {
          !this.state.logined &&
          <LoginPage 
          loginAPI={this.loginAPI}
          />
        }
        {
          this.state.logined &&
          <Template></Template>
        }
      </div>
    );
  }
}

export default App;

