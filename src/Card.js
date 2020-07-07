import React from 'react';

const Card = ({ people }) => {
    return (
        <div className="card">
          <div className="person-photo">
            <img src={`./images/users/${people[0].image}`} alt="keanu"></img>
          </div>
          <div className="person-name">
            <p>Akhil</p>
          </div>
        </div>
    );
}

export default Card;