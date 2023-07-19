// React
import { useChosenClues } from '../clues';

// Styles
import './styles/modal.css';

export default function Modal({ object, onClose }) {
  const chosenClues = useChosenClues();

  return (
    <div className="modal-container">
      <p className="close-icon" onClick={onClose}>
        ❌
      </p>
      <p className="image">{object.img}</p>
      <p className="description">{object.description}</p>
      {chosenClues.chosenClues.length === 3 && (
        <button className="guess-button">It was you!</button>
      )}
    </div>
  );
}
