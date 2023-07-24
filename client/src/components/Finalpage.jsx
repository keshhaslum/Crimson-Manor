import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from '../mockData';
import { useChosenSuspect } from '../selectedSuspectContext';
import ChosenClues from './ChosenClues';

export default function Finalpage({murdererId}) {  //pass props of murdererid here
  const chosenSuspect = useChosenSuspect();


  const detectiveJobMessage =
    murdererId === chosenSuspect?.chosenSuspect.id
      ? 'Amazing detective job!'
      : 'Oh no! The murderer escaped!';


  return (
    <div className="finalpage component-container">
      <h2 className="title">{detectiveJobMessage}</h2>
      <p className="icon">{chosenSuspect.chosenSuspect.img}</p>  {/*add murderer id here*/}
      <p className="description">{chosenSuspect.chosenSuspect.what_happened}</p>
      <Link to={`/`}>
        <button className="button">Play again</button>
      </Link>
    </div>
  );
}
