import React, { useEffect, useState } from 'react';
import { useChosenClues } from '../clues';

export default function ChosenClues() {
  const cluesProvider = useChosenClues();
  const chosenClues = cluesProvider.chosenClues;
  console.log(chosenClues);
  return (
    <div>
      {chosenClues.map((clue) => (
        <div key={`clue${clue.id}`}>{clue.img}</div>
      ))}
    </div>
  );
}
