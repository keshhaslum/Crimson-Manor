// Temporary
import data from '../mockData';
// import React from 'react';
import { useState } from 'react';

export default function Suspects() {
  const allCharacters = data.allCharacters;
  const [currentCharacter, setCurrentCharacter] = useState(null);

  return (
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
        </div>
      )}
    </div>
  );
}
