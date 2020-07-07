import React from 'react';
import './App.css';
import data from './data.json';
import Header from './Header';
import Card from './Card';
import Buttons from './Buttons';

function App() {

  function Dislike(){
    console.log("clicked");
  }

  function Like(){
    console.log("clicked");
  }

  const people = data;

  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Card 
        people = {people}
        />
      </div>
      <Buttons
      Dislike = {Dislike}
      Like = {Like}
      />
    </div>
  );
}

export default App;
