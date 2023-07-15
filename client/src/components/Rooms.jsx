import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChosenClues from './ChosenClues';
import Suspects from './Suspects';
import { useChosenClues } from '../clues';

export default function Rooms({ allRooms, allFakeClues, allMurdererClues }) {
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

  const goToPreviousRoom = () => {
    setRoomTracker((prevRoomTracker) =>
      prevRoomTracker === 0 ? prevRoomTracker : prevRoomTracker - 1
    );
    setSelectedClue(null);
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
    <div className="rooms-container">
      <ChosenClues />
      <button className="prev-button" onClick={goToPreviousRoom}>
        P
      </button>
      <div className="current-room">
        <div className="room-info">
          <h3>{`${currentRoom.room}${currentRoom.img}`}</h3>
          <p>{currentRoom.description}</p>
        </div>

        <div
          className="selected-clue"
          onClick={() => {
            chosenClues.updateClues(selectedClue);
          }}
        >
          <p className="circular-button">{selectedClue?.img}</p>
          <p>{selectedClue?.description}</p>
        </div>

        <div className="clues-container">
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
        </div>
      </div>
      <button className="next-button" onClick={goToNextRoom}>
        N
      </button>
      <Link to={`/finalpage/`}>
        <button>Guess</button>
      </Link>
      {/* <Suspects className="suspects-container"></Suspects> */}
    </div>
  );
}
