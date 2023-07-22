import React from 'react';
import { Link } from 'react-router-dom';

export default function Crime() {
  return (
    <div className="crime-container">
      <h1>The crime</h1>

      <h2>🤵</h2>
      <p>
        John Parker was a wealthy businessman known for his cutthroat tactics in
        the corporate world. He was found dead in the study of his luxurious
        mansion, shot in the head. The murder weapon, a rare antique pistol, was
        found near the body.
      </p>

      <Link to={`/scene/`}>
        <button className="prev-button">⬅️</button>
      </Link>

      <Link to={`/character/`}>
        <button className="next-button">➡️</button>
      </Link>
    </div>
  );
}
