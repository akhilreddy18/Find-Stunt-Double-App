import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Header from './Header';
import Card from './Card';

function App() {

  const [people, updateList] = useState(data);

  function handleClick(userId){
    updateList(removePerson(people, userId));
  }

  const removePerson = (remainingPeople, userId) =>
  remainingPeople.filter(user => user.id !== userId);

  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Card 
        people = {people}
        handleClick = {handleClick}
        />
      </div>
    </div>
  );
}

export default App;
