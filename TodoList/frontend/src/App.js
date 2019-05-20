import React, { Component } from 'react';
import './App.css';
import Template from './BaseTemplate'


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
  openModal(target) {  //모달창 켜기
    this.setState({
      [target]: true,
    });
  }
  closeModal(target) { //모달창 끄기
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

