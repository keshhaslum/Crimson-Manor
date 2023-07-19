// React
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useChosenClues } from '../clues';

// Styles
import './styles/rooms.css';

// Components
import Menu from './Menu';
import Clue from './Clue';
import ChosenClues from './ChosenClues';

export default function Rooms({
  allRooms,
  allFakeClues,
  allMurdererClues,
  allCharacters,
  victimInfo,
  detectiveInfo,
}) {
  const chosenClues = useChosenClues();

  const clues = [
    {
      room: 'room1',
      clues: [allFakeClues[0], allFakeClues[1], allMurdererClues[0]],
    },
    {
      room: 'room2',
      clues: [allFakeClues[2], allFakeClues[3], allMurdererClues[1]],
    },
    {
      room: 'room3',
      clues: [allFakeClues[4], allFakeClues[5], allMurdererClues[2]],
    },
  ];

  const [roomTracker, setRoomTracker] = useState(0);
  const [currentRoom, setCurrentRoom] = useState(allRooms[0]);
  const [currentClues, setCurrentClues] = useState(clues[0]);
  const [selectedClue, setSelectedClue] = useState(null);

  useEffect(() => {
    setCurrentRoom(allRooms[roomTracker]);
    setCurrentClues(clues[roomTracker]);
  }, [roomTracker]);

  const navigate = useNavigate();

  const goToPreviousRoom = () => {
    if (roomTracker === 0) {
      navigate('/instructions');
    } else {
      setRoomTracker((prevRoomTracker) => prevRoomTracker - 1);
      setSelectedClue(null);
    }
  };

  const goToNextRoom = () => {
    setRoomTracker((prevRoomTracker) =>
      prevRoomTracker === allRooms.length - 1
        ? prevRoomTracker
        : prevRoomTracker + 1
    );
    setSelectedClue(null);
  };

  return (
    <>
      <Menu
        allCharacters={allCharacters}
        victimInfo={victimInfo}
        detectiveInfo={detectiveInfo}
      ></Menu>

      <div className="rooms-container">
        <ChosenClues />

        <div className="room">
          <button className="prev-button" onClick={goToPreviousRoom}>
            ⬅️
          </button>
          <div className="info">
            <h3>{`${currentRoom.room}${currentRoom.img}`}</h3>
            <p>{currentRoom.description}</p>
          </div>

          {/* <div
            className="selected-clue"
            onClick={() => {
              chosenClues.addClues(selectedClue);
            }}
          >
            {selectedClue && (
              <p className="circular-button">{selectedClue?.img}</p>
            )}

            <p className="clue-description">{selectedClue?.description}</p>
          </div> */}

          {roomTracker <= 1 && roomTracker !== 3 && (
            <button className="next-button" onClick={goToNextRoom}>
              ➡️
            </button>
          )}

          {/* {chosenClues.chosenClues.length === 3 && roomTracker == 2 && (
            <Link className="next-button" to={`/finalpage/`}>
              <button className="next-button">🕵🏼‍♀️</button>
            </Link>
          )} */}
        </div>

        <div className="clues-container">
          {currentClues.clues.map((clue, index) => (
            <Clue key={`clue${index}`} clue={clue} />
          ))}
        </div>

        {/* <div className="clues-container">
          {currentClues.clues.map((clue, index) => (
            <div
              className="circular-button"
              key={`clue${index}`}
              onClick={() => {
                setSelectedClue(clue);
              }}
            >
              <p>{clue.img}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
