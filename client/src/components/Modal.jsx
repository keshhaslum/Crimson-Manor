// React
import { useChosenClues } from '../selectedCluesContext';
import { Link } from 'react-router-dom';

// Styles
import './styles/modal.css';

export default function Modal({ object, onClose }) {
  const chosenClues = useChosenClues();

  const isClue = !object.hasOwnProperty('name');

  return (
    <div className="modal-container">
      <p className="close-icon" onClick={onClose}>
        ❌
      </p>
      <p
        className={isClue ? 'image circular-button' : 'image'}
        onClick={isClue ? () => chosenClues.addClues(object) : undefined}
      >
        {object.img}
      </p>
      <p className="description">{object.description}</p>
      {chosenClues.chosenClues.length === 3 && !isClue && (
        <Link className="guess-button" to={`/finalpage/`}>
          <button className="guess-button">It was you!</button>
        </Link>
      )}
    </div>
  );
}
