// React
import { useChosenClues } from '../selectedCluesContext';
import { useChosenSuspect } from '../selectedSuspectContext';
import { Link } from 'react-router-dom';

// Styles
import './styles/modal.css';

export default function Modal({ object, onClose }) {
  const chosenClues = useChosenClues();
  const chosenSuspect = useChosenSuspect();

  const isClue = !object.hasOwnProperty('name');
  console.log('isClue?', isClue);

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
      {chosenClues.chosenClues.length === 3 &&
        !isClue &&
        object.hasOwnProperty('what_happened') && (
          <Link className="guess-button" to={`/finalpage/`}>
            <button
              className="guess-button"
              onClick={() => {
                chosenSuspect.chooseSuspect(object);
              }}
            >
              It was you!
            </button>
          </Link>
        )}
    </div>
  );
}
