import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    <div className="rooms-container">
      <ChosenClues />
      <button className="prev-button" onClick={goToPreviousRoom}>
        ⬅️
      </button>
      <div className="current-room">
        <div className="room-info">
          <h3>{`${currentRoom.room}${currentRoom.img}`}</h3>
          <p>{currentRoom.description}</p>
        </div>

        <div
          className="selected-clue"
          onClick={() => {
            chosenClues.addClues(selectedClue);
          }}
        >
          {selectedClue && (
            <p className="circular-button">{selectedClue?.img}</p>
          )}

          <p className="clue-description">{selectedClue?.description}</p>
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

      {roomTracker <= 1 && (
        <button className="next-button" onClick={goToNextRoom}>
          ➡️
        </button>
      )}
      {chosenClues.chosenClues.length === 3 && (
        <Link to={`/finalpage/`}>
          <button className="next-button guess-button">🕵🏼‍♀️</button>
        </Link>
      )}

      <Suspects className="suspects-container"></Suspects>
    </div>
  );
}
