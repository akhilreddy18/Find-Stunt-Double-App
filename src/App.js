import React from 'react';
import './App.css';

function App() {

  function Dislike(){
    console.log("clicked");
  }

  function Like(){
    console.log("clicked");
  }
  return (
    <div className="Entire">
      <div className="App">
        <div className="header">
          <img src="/images/logo.jpg" height="80" alt="logo"></img>
          <h3>Position: Stunt double</h3>
        </div>
        <div className="card">
          <div className="person-photo">
            <img src="./images/keanu.jpg" alt="keanu"></img>
          </div>
          <div className="person-name">
            <p>Akhil</p>
          </div>
        </div>
      </div>
      <div className="buttons">
      <input type="image" name="submit" src="./images/dislike.png" width="40px" alt="Dislike button" onClick={Dislike}></input>
      <input type="image" name="submit" src="./images/like.png" width="50px" alt="Like button" onClick={Like}></input>
      </div>
    </div>
  );
}

export default App;
