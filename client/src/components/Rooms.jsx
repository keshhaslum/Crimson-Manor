// React
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useChosenClues } from '../selectedCluesContext';

// Styles
import './styles/rooms.css';

// Components
import Menu from './Menu';
import Clue from './Clue'; // do not change this import 
import ChosenClues from './ChosenClues';

export default function ClueRooms({ 
  allRooms,
  allFakeClues,
  allMurdererClues,
  allCharacters,
  victimInfo,
  detectiveInfo,
}) {
 
 
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      // Fetch the data here and update the state accordingly
      const fetchData = async () => {
        try {
          // Fetch the random character first (assuming you have the function for this)
          const randomCharacter = await fetchRandomCharacter();
  
          // Fetch 3 random clues related to the selected character
          const relatedClues = await fetchRelatedClues(randomCharacter.id);
  
          // Fetch 6 random clues with character_id as null
          const unrelatedClues = await fetchUnrelatedClues();
  
          // Distribute the clues among three rooms
          const cluesPerRoom = 3;
          const totalRooms = 3;
          const distributedClues = distributeClues(relatedClues, unrelatedClues, cluesPerRoom, totalRooms);
  
          // Create the room data array
          const roomData = distributedClues.map((clues, index) => ({
            room: `room${index + 1}`,
            clues,
          }));
  
          // Update the state with the room data
          setRooms(roomData);
        } catch (error) {
          console.error('Error fetching clues:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Function to fetch random character
    const fetchRandomCharacter = async () => {
      // Replace this with your actual fetch method
      const response = await fetch('/api/random');
      const data = await response.json();
      return data[0];
    };
  
    // Function to fetch related clues
    const fetchRelatedClues = async (characterId) => {
      // Replace this with your actual fetch method
      const response = await fetch(`/api/random/${characterId}`);
      const data = await response.json();
      return data;
    };
  
    // Function to fetch unrelated clues
    const fetchUnrelatedClues = async () => {
      // Replace this with your actual fetch method
      const response = await fetch('/api/random');
      const data = await response.json();
      return data; //or should this be data[2]?
    };
  
    // Function to distribute the clues equally among the rooms
    const distributeClues = (relatedClues, unrelatedClues, cluesPerRoom, totalRooms) => {
      const totalRelatedClues = relatedClues.length;
      const totalUnrelatedClues = unrelatedClues.length;
  
      // Calculate how many related and unrelated clues should go in each room
      const relatedPerRoom = Math.floor(totalRelatedClues / totalRooms);
      const unrelatedPerRoom = Math.floor(totalUnrelatedClues / totalRooms);
  
      // Distribute the related clues among rooms
      const distributedRelatedClues = [];
      for (let i = 0; i < totalRooms; i++) {
        const start = i * relatedPerRoom;
        const end = i === totalRooms - 1 ? totalRelatedClues : start + relatedPerRoom;
        distributedRelatedClues.push(relatedClues.slice(start, end));
      }
  
      // Distribute the unrelated clues among rooms
      const distributedUnrelatedClues = [];
      for (let i = 0; i < totalRooms; i++) {
        const start = i * unrelatedPerRoom;
        const end = i === totalRooms - 1 ? totalUnrelatedClues : start + unrelatedPerRoom;
        distributedUnrelatedClues.push(unrelatedClues.slice(start, end));
      }
  
      // Combine the related and unrelated clues for each room
      const distributedClues = [];
      for (let i = 0; i < totalRooms; i++) {
        distributedClues.push([...distributedRelatedClues[i], ...distributedUnrelatedClues[i]]);
      }
      return distributedClues;
    };


  const [roomTracker, setRoomTracker] = useState(0);
  const [currentRoom, setCurrentRoom] = useState(allRooms[0]);
  const [currentClues, setCurrentClues] = useState(clues[0]);

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
    }
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

          {roomTracker <= 1 && roomTracker !== 3 && (
            <button className="next-button" onClick={goToNextRoom}>
              ➡️
            </button>
          )}
        </div>

        <div className="clues-container">
          {currentClues.clues.map((clue, index) => (
            <Clue key={`clue${index}`} clue={clue} />
          ))}
        </div>

        {rooms.map((roomData, index) => ( //mapping through rooms here 
        <div key={index}>
          <h2>{roomData.room}</h2>
          {roomData.clues.map((clue, clueIndex) => (
            <pre key={clueIndex}>{JSON.stringify(clue, null, 2)}</pre>
          ))}
        </div>
      ))}
      </div>
    </>
  );
}
