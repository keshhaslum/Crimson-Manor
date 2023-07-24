import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useChosenSuspect } from '../selectedSuspectContext';
import { useChosenClues } from '../selectedCluesContext';

// import ChosenClues from './ChosenClues';

export default function Finalpage({ murdererId, onPlayAgain }) {
  const chosenSuspect = useChosenSuspect();
  const cluesProvider = useChosenClues();

  const detectiveJobMessage =
    murdererId === chosenSuspect?.chosenSuspect.id
      ? 'Amazing detective job!'
      : 'Oh no! The murderer escaped!';

  return (
    <div className="finalpage component-container">
      <h2 className="title">{detectiveJobMessage}</h2>
      <p className="icon">{chosenSuspect.chosenSuspect.img}</p>{' '}
      <p className="description">{chosenSuspect.chosenSuspect.what_happened}</p>
      <Link to={`/`}>
        <button
          className="button"
          onClick={() => {
            cluesProvider.resetClues();
            onPlayAgain();
          }}
        >
          Play again
        </button>
      </Link>
    </div>
  );
}
