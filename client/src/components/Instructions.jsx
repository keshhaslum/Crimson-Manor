import React from 'react';
import { Link } from 'react-router-dom';

export default function Instructions() {
  return (
    <div className="instructions-container">
      <h1>Game Instructions</h1>

      <p>Your chosen clues will be stored here.</p>

      <Link to={`/character/`}>
        <button className="regular-button">Previous</button>
      </Link>

      <Link to={`/rooms/`}>
        <button className="regular-button">Next</button>
      </Link>
    </div>
  );
}
