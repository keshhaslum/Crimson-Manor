import React from 'react';
import { Link } from 'react-router-dom';

export default function Crime() {
  return (
    <div className="crime component-container">
      <h1 className="title">The crime</h1>

      <h2 className="icon">🤵</h2>
      <p className="description">
        John Parker was a wealthy businessman known for his cutthroat tactics in
        the corporate world. He was found dead in the study of his luxurious
        mansion, shot in the head. The murder weapon, a rare antique pistol, was
        found near the body.
      </p>

      <Link to={`/character/`}>
        <button className="button">Continue</button>
      </Link>
    </div>
  );
}
