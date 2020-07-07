import React from 'react';

const Buttons = ({ id, handleClick }) => {

    return (
        <div className="buttons">
            <input type="image" name="submit" src="./images/dislike.png" width="40px" alt="Dislike button" onClick={() => handleClick(id)}></input>
            <input type="image" name="submit" src="./images/like.png" width="50px" alt="Like button" onClick={() => handleClick(id)}></input>
        </div>
    );
}

export default Buttons;