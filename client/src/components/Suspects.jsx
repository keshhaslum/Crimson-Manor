// Temporary
import data from '../mockData';
import React from 'react';
import { useState } from 'react';

export default function Suspects() {
  const allCharacters = data.allCharacters;
  const [currentCharacter, setCurrentCharacter] = useState(null);
  return (
    <div>
      <div>
        {allCharacters.map((character) => (
          <div
            key={character.id}
            onClick={() => {
              setCurrentCharacter(character);
            }}
          >
            {character.img}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setCurrentCharacter(null);
          }}
        >
          X
        </button>
        <h3>{currentCharacter?.name}</h3>
        <h3>{currentCharacter?.last_name}</h3>
        <p>{currentCharacter?.description}</p>
      </div>
    </div>
  );
}
