// React
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Components
import Modal from './Modal';
import Menu from './Menu';

export default function Instructions() {
  const [sampleClue] = useState({
    id: 2,
    description: 'A torn business card with an unknown name and phone number',
    character_id: 'null',
    img: '📇',
  });

  return (
    <>
      <div className=" instructions component-container">
        <h1 className="title">Game Instructions</h1>
        <ol className="steps-container">
          <li className="step">
            Click on the character icons to view their information at any time.
          </li>
          <li className="step">Navigate through the rooms to find clues.</li>
          <li className="step">
            Click on the clues to read their descriptions.
          </li>
          <li className="step">
            If you believe a clue is relevant, click the button to add it to the
            list at the top of the screen.
          </li>
          <li className="step">
            Once you have three clues, click on the suspect you believe is
            guilty and make your guess.
          </li>
        </ol>

        <Link to={`/rooms/`}>
          <button className="button">Good luck</button>
        </Link>
      </div>
    </>
  );
}
