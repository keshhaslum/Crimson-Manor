import React, { useEffect, useState } from 'react';

export default function Rooms({ allRooms, allFakeClues, allMurdererClues }) {
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

  console.log(clues);

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
  };

  const goToNextRoom = () => {
    setRoomTracker((prevRoomTracker) =>
      prevRoomTracker === allRooms.length - 1
        ? prevRoomTracker
        : prevRoomTracker + 1
    );
  };

  return (
    <>
      <button onClick={goToPreviousRoom}>Previous Room</button>

      <div className="rooms-container">
        <div className="room-name-img">
          <h3>{`${currentRoom.room}${currentRoom.img}`}</h3>
        </div>

        <div className="room-selected-clue-img">
          <p></p>
        </div>

        <div className="room-selected-clue-description"></div>

        <div className="room-clues-container">
          {currentClues.clues.map((clue, index) => (
            <div
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
      <button onClick={goToNextRoom}>Next Room</button>
    </>
  );
}
