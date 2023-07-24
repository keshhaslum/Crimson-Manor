import React from 'react';
import { Link } from 'react-router-dom';

export default function Crime({ victimInfo }) {
  return (
    <div className="crime component-container">
      <h1 className="title">The crime</h1>

      <h2 className="icon">{victimInfo.img}</h2>
      <p className="description">{victimInfo.description}</p>

      <Link to={`/character/`}>
        <button className="button">Continue</button>
      </Link>
    </div>
  );
}
