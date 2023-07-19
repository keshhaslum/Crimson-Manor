// React
import { useState } from 'react';
import { useChosenClues } from '../clues';

// Components
import Modal from './Modal';

// Styles
import './styles/clue.css';

export default function Clue({ clue }) {
  const chosenClues = useChosenClues();
  const [selectedClue, setSelectedClue] = useState(null);

  const closeModal = () => {
    setSelectedClue(null);
  };

  return (
    <>
      <div
        className="circular-button"
        onClick={() => {
          setSelectedClue(clue);
        }}
      >
        <p>{clue.img}</p>
      </div>
      {selectedClue && (
        <Modal
          className="modal-container"
          object={selectedClue}
          onClose={closeModal}
        />
      )}
    </>
  );
}
