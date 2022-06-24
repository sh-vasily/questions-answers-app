import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Question from './Question';


let defaultQuestions = Array(10).fill(1).map((item, index) => `Вопрос № ${index+1}`);

let App = ()=>{

  let  [questions, setQuestions] = React.useState(defaultQuestions);
  let  [question, setQuestion] = React.useState("");

  return     <div className="App">
  <header className="App-header">
    <Header></Header>
    <input placeholder='Вопрос' onChange={(event: React.FormEvent<HTMLInputElement>) => {
      setQuestion(event.currentTarget.value);
    }}></input>
    <button onClick = {(event) => {
      questions.push(question);
      setQuestions(questions);
    }}>Задать вопрос</button>
    {questions.map(item => <Question text={item} key = {item}/>)}  
    <img src={logo} className="App-logo" alt="logo" />
  </header>
</div>;
};

export default App;
