import React from 'react';
import Buttons from './Buttons'

const Card = ({ people, handleClick }) => {
  console.log(people);
  return (
    <>
      {
        people.length > 0 ?
          (
            <><div className="card">
              <div className="person-photo">
                <img src={`./images/users/${people[0].image}`} alt="keanu"></img>
              </div>
              <div className="person-name">
                <p>{people[0].name}</p>
              </div>
            </div>
              <Buttons
                id={people[0].id}
                handleClick={handleClick}
              />
            </>
          ) :

          <div className="list-complete">
            <h3>
              The list is completed.
            </h3>
          </div>
      }
    </>

  );
}

export default Card;