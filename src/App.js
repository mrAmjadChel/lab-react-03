import React from 'react';
import './App.css';
import WordCard from './WordCard';

const  word = ["lion", "cat", "tiger", "wolf", "sheep", "whale","monkey","rabbit","owl"];
const randomword = word[Math.floor(Math.random() * word.length)];

function delay(ms) {

  ms += new Date().getTime();
  while (new Date() < ms){}

}

function App() {

  return (
    <div>
      <h1 align = "center" > Random name of Animal
        <WordCard value= {randomword}/>   
      </h1>    
    </div>
  );

}

export default App;
