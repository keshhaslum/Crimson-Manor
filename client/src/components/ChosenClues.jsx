import React, { useEffect, useState } from 'react';
import { useChosenClues } from '../clues';

export default function ChosenClues() {
  const cluesProvider = useChosenClues();
  const chosenClues = cluesProvider.chosenClues;
  return (
    <div className="chosen-clues-container">
      {chosenClues.map((clue) => (
        <div className="circular-button" key={`clue${clue.id}`}>
          {clue.img}
        </div>
      ))}
    </div>
  );
}
