import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from '../mockData';
import { useChosenSuspect } from '../selectedSuspectContext';
import ChosenClues from './ChosenClues';

export default function Finalpage() { 
  const chosenSuspect = useChosenSuspect();
  const [murderer, setMurderer] = useState(null);

  useEffect(() => {
    getMurderer();
  }, []);

  const getMurderer = async () => {
  try {
    const response = await fetch('/api/random'); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setMurderer(data[0]);
  } catch (error) {
    console.error('Error fetching murderer character:', error);
  }
};

  const detectiveJobMessage =
    murderer === chosenSuspect?.chosenSuspect.id
      ? 'Amazing detective job!'
      : 'Oh no! The murderer escaped!';


  return (
    <div className="finalpage component-container">
      <h2 className="title">{detectiveJobMessage}</h2>
      <p className="icon">{chosenSuspect.murderer.img}</p>  {/*is this right?*/}
      <p className="description">{chosenSuspect.chosenSuspect.what_happened}</p>
      <Link to={`/`}>
        <button className="button">Play again</button>
      </Link>
    </div>
  );
}
