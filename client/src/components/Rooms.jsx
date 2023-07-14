import React from 'react';
import { useState } from 'react';

export default function Rooms({ allRooms, allFakeClues, allMurdererClues }) {
  console.log(allFakeClues);
  const [currentRoom, setCurrentRoom] = useState(allRooms[0]);
  const [room1Clues, setRoom1Clues] = useState([
    allFakeClues[0],
    allFakeClues[1],
    allMurdererClues[0],
  ]);

  return (
    <div className="rooms-container">
      <div className="room-name-img">
        <h3>{`${currentRoom.room}${currentRoom.img}`}</h3>
      </div>

      <div className="room-selected-clue-img">
        <p></p>
      </div>

      <div className="room-selected-clue-description"></div>

      <div className="room-clues-container">
        {room1Clues.map((clue) => (
          <div key={clue.id}>
            <p>{clue.img}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
