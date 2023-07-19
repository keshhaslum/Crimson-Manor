// import React from 'react';
import { Link } from 'react-router-dom';
import './styles/homepage.css';

export default function Homepage() {
  return (
    <div className="homepage component-container">
      <img
        className="logo-homepage"
        src="https://cdn.bfldr.com/Z0BJ31FP/at/k84gx4pxhs6tkrntkzpjf4n/crimson-manor-logo.svg"
        alt="Crimson Manor Logo"
      />
      <h2 className="icon">🕵️‍♀️</h2>

      <Link to={`/scene/`}>
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
