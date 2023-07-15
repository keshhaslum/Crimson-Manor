import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Crimson Manor</h1>
      <h2>🕵️‍♀️</h2>
      <p>Solve the murder mystery</p>

      <Link to={`/scene/`}>
        <button className="regular-button">Start</button>
      </Link>
    </div>
  );
}
