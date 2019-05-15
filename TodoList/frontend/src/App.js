import React from 'react';

import './App.css';
import Test from './Test'

function App() {
  return (
    <div className="m-5">
      <header align="center" className="">
        <h1 className="text-primary"> 투두 리스트 </h1>
      </header>
      <div className="card m-5">
        <div className="col"> 콜롬 </div>
        <div className="col text-primary"> 콜롬 </div>
      </div>
    </div>
  );
}

export default App;