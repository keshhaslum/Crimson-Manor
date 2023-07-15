import React from 'react';
import Suspects from './Suspects';
import { Link } from 'react-router-dom';

export default function Finalpage() {
  return (
    <div>
      <h2>Who committed the crime?</h2>
      <Suspects></Suspects>

      <Link to={`/`}>
        <button>Back to start</button>
      </Link>
    </div>
  );
}
