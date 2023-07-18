// import React from 'react';
import { Link } from 'react-router-dom';
import './styles/homepage.css';

export default function Homepage() {
  return (
    <div className="homepage-container">
      <h1 className="title">Crimson Manor</h1>
      <h2 className="icon">🕵️‍♀️</h2>

      <Link to={`/scene/`}>
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
