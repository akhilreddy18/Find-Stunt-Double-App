import React from 'react';

const Buttons = ({ Dislike, Like }) => {

    return (
        <div className="buttons">
      <input type="image" name="submit" src="./images/dislike.png" width="40px" alt="Dislike button" onClick={Dislike}></input>
      <input type="image" name="submit" src="./images/like.png" width="50px" alt="Like button" onClick={Like}></input>
      </div>
    );
}

export default Buttons;