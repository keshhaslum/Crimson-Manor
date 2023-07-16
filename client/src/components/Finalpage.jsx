import React from 'react';
import { useState } from 'react';
import data from '../mockData';

import Suspects from './Suspects';
import { useChosenClues } from '../clues';
import { Link } from 'react-router-dom';

export default function Finalpage() {
  const chosenClues = useChosenClues();
  const [selectedClue, setSelectedClue] = useState(null);
  const allCharacters = data.allCharacters;
  const [currentCharacter, setCurrentCharacter] = useState(null);

  return (
    <>
      <h2>The crime</h2>

      <h3>🤵</h3>
      <p>
        John Parker was a wealthy businessman known for his cutthroat tactics in
        the corporate world. He was found dead in the study of his luxurious
        mansion, shot in the head. The murder weapon, a rare antique pistol, was
        found near the body.
      </p>
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
      <h3>Who committed the crime?</h3>
      <div className="suspects-container">
        <div className="suspects-buttons">
          {allCharacters.map((character) => (
            <div
              className="circular-button"
              key={character.id}
              onClick={() => {
                setCurrentCharacter(character);
              }}
            >
              {character.img}
            </div>
          ))}
        </div>
        {currentCharacter && (
          <div className="suspects-info popup">
            <button
              className="close-button"
              onClick={() => {
                setCurrentCharacter(null);
              }}
            >
              ❎
            </button>
            <h3>{`${currentCharacter?.img} ${currentCharacter?.name} ${currentCharacter?.last_name}`}</h3>
            <p>{currentCharacter?.description}</p>
            <button className="guess-button">It was you!</button>
          </div>
        )}
      </div>
    </>
  );
}
