import React from 'react';
import { Link } from 'react-router-dom';

export default function Character() {
  return (
    <div className="character-container">
      <h1>Your Character</h1>
      <h2>🕵️‍♀️</h2>
      <p>
        Detective Sarah Williams is a seasoned investigator with a sharp mind
        and keen attention to detail. She has an impressive track record of
        solving complex cases and has a reputation for always getting to the
        truth.
      </p>

      <Link to={`/crime/`}>
        <button className="prev-button">⬅️</button>
      </Link>

      <Link to={`/instructions/`}>
        <button className="next-button">➡️</button>
      </Link>
    </div>
  );
}
