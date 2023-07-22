import React from 'react';
import { Link } from 'react-router-dom';
import Suspects from './Suspects';


export default function Instructions({allFakeClues}) {
 
  const clues = [
    { clues: [allFakeClues[0], allFakeClues[1], allFakeClues[2]]}
   ];

  return (
    <div className="instructions-container">
      <h1>Game Instructions</h1>

      <div className ="room-clues-container-example">Your chosen clues will be stored here</div>

      <div>Click on each clue for more information.
        When you have decided, add the clue so it is stored.
      </div>
      
      <div className="clues-container">
        {allFakeClues.map((clue, index) => (
        <div className="circular-button">
         <p>{clue.img}</p>
         <p>{clue.id}</p>
         </div>

        ))}
            

      </div>
   
      These are your 3 suspects.
      Click on each suspect for more information.
      <Suspects></Suspects>

      <Link to={`/character/`}>
        <button className="prev-button">⬅️</button>
      </Link>

      <Link to={`/rooms/`}>
        <button className="next-button">➡️</button>
      </Link>
    </div>
  );
}
