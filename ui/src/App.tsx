import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Question from './Question';

let App = ()=>
    <div className="App">
      <header className="App-header">
        <Header></Header>
        {Array(10).fill(1).map((item, index) => `Вопрос № ${index+1}`).map(item => <Question text={item} key = {item}/>)}  
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>;

export default App;
