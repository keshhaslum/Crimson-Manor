// React
import React, { useEffect, useState } from 'react';
import { useChosenClues } from '../selectedCluesContext';

// Styles
import './styles/chosen-clues.css';

export default function ChosenClues() {
  const cluesProvider = useChosenClues();
  const chosenClues = cluesProvider.chosenClues;

  const removeClues = (clue) => {
    cluesProvider.removeClues(clue);
    console.log('remove clues');
  };
  return (
    <div className="chosen-clues-container">
      {chosenClues.map((clue, index) => (
        <div
          className="circular-button"
          key={`chosenClue${index}`}
          onClick={() => removeClues(clue)}
        >
          {clue.img}
        </div>
      ))}
    </div>
  );
}
