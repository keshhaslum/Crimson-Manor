// React
import { useChosenClues } from '../clues';

// Styles
import './styles/modal.css';

export default function Modal({ object, onClose }) {
  const chosenClues = useChosenClues();

  // Check if the `character_id` property exists in `object`
  const isCircleButton = !object.hasOwnProperty('name');
  console.log(isCircleButton);

  return (
    <div className="modal-container">
      <p className="close-icon" onClick={onClose}>
        ❌
      </p>
      <p className={isCircleButton ? 'image circular-button' : 'image'}>
        {object.img}
      </p>
      <p className="description">{object.description}</p>
      {chosenClues.chosenClues.length === 3 && (
        <button className="guess-button">It was you!</button>
      )}
    </div>
  );
}
