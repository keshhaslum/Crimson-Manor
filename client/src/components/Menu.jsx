import './styles/menu.css';

import { useState } from 'react';

export default function Menu({ allCharacters }) {
  return (
    <div className="menu-container">
      <div className="logo-container">
        <img
          className="menu-logo"
          src="https://cdn.bfldr.com/Z0BJ31FP/at/k84gx4pxhs6tkrntkzpjf4n/crimson-manor-logo.svg"
          alt="Crimson Manor"
        />
      </div>
      <div className="character-icons">
        <p className="character">🤵🏽‍♂️</p>
        <p className="character">🕵🏼‍♀️</p>
        {allCharacters.map((character) => (
          <p className="character" key={character.id}>
            {character.img}
          </p>
        ))}
      </div>
    </div>
  );
}
