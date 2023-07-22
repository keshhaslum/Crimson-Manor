// React
import { useState } from 'react';
// Styles
import './styles/menu.css';

// Components
import Modal from './Modal';

export default function Menu({ allCharacters, victimInfo, detectiveInfo }) {
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const closeModal = () => {
    setCurrentCharacter(null);
  };

  return (
    <>
      <div className="menu-container">
        <div className="logo-container">
          <img
            className="menu-logo"
            src="https://cdn.bfldr.com/Z0BJ31FP/at/k84gx4pxhs6tkrntkzpjf4n/crimson-manor-logo.svg"
            alt="Crimson Manor"
          />
        </div>
        <div className="character-icons">
          <p
            className="character"
            onClick={() => {
              setCurrentCharacter(victimInfo);
            }}
          >
            {victimInfo?.img}
          </p>

          <p
            className="character"
            onClick={() => {
              setCurrentCharacter(detectiveInfo);
            }}
          >
            {detectiveInfo?.img}
          </p>

          {allCharacters.map((character) => (
            <p
              className="character"
              key={character?.id}
              onClick={() => {
                setCurrentCharacter(character);
              }}
            >
              {character?.img}
            </p>
          ))}
        </div>
      </div>
      {currentCharacter && (
        <Modal
          className="modal-container"
          object={currentCharacter}
          onClose={closeModal}
        />
      )}
    </>
  );
}
