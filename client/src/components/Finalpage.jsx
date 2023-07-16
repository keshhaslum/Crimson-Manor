import React from 'react';
import { useState } from 'react';
import Suspects from './Suspects';
import { useChosenClues } from '../clues';
import { Link } from 'react-router-dom';

export default function Finalpage() {
  const chosenClues = useChosenClues();
  const [selectedClue, setSelectedClue] = useState(null);
  console.log(selectedClue);

  return (
    <>
      <h2>Your Clues</h2>
      <div className="final-clues">
        {chosenClues.chosenClues.map((clue) => (
          <div
            className="final-clue"
            key={`clue${clue.id}`}
            onClick={() => {
              setSelectedClue(clue);
            }}
          >
            <p className="circular-button">{clue.img}</p>
          </div>
        ))}
        {selectedClue && (
          <div className="popup">
            <button
              className="close-button"
              onClick={() => {
                setSelectedClue(null);
              }}
            >
              ❎
            </button>
            <h3>{selectedClue?.img}</h3>
            <p>{selectedClue?.description}</p>
          </div>
        )}
      </div>
      <h2>The Suspects</h2>
      <Suspects />
    </>
  );
}
