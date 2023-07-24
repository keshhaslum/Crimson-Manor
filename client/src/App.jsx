// React
import { Routes, Route } from 'react-router-dom';
import { SelectedCluesProvider } from './selectedCluesContext';
import { SelectedSuspectProvider } from './selectedSuspectContext';
import { useState, useEffect } from 'react';

// Styles
import './App.css';

// Pages
import Homepage from './components/Homepage';
import Crime from './components/Crime';
import Scene from './components/Scene';
import Character from './components/Character';
import Instructions from './components/Instructions';
import Rooms from './components/Rooms';
import Finalpage from './components/Finalpage';

// Temporary
import data from './mockData'; 


function App() {
  const victimInfo = {
    name: 'John',
    last_name: 'Parker',
    description: `John Parker was a wealthy businessman known for his cutthroat tactics in the corporate world. He was found dead in the study of his luxurious mansion, shot in the head. The murder weapon, a rare antique pistol, was found near the body.`,
    img: '🤵🏽‍♂️',
  };

  const detectiveInfo = {
    name: 'Sarah',
    last_name: 'Williams',
    description: `Detective Sarah Williams is a seasoned investigator with a sharp mind and keen attention to detail. She has an impressive track record of solving complex cases and has a reputation for always getting to the truth.`,
    img: '🕵🏼‍♀️',
  };
  

 const [gameData, setGameData] = useState({character:{}, relatedClues:[], unrelatedClues:[]});

 useEffect(() => {
   getGameData();

  }, []);

 const getGameData = () => {
  fetch("/api/random")
 .then((response) => response.json()) 
 .then((random) => {
     setGameData(random);
     console.log(random);
   })
   .catch((error) => {
    console.log(error);
  });
};


  //const allFakeClues = randomGameInfo.unrelatedClues - this will give an array
  //[{clue1}, {clue2} etc up until 6 ]

  //const allMurdererClues= randomGameInfo.relatedClues 
  //[{clue1} up until clue 3] --pass below the props 

  //const randomcharacter.random character.id
  return (
    <div className="game-container">
      <SelectedCluesProvider>
        <SelectedSuspectProvider>
          <Routes>
            <Route
              path="/rooms"
              element={
                <>
                  <Rooms
                    // allRooms={data.ClueRooms} //do I still need these?
                    // allClues={data.allClues}
                    allMurdererClues={gameData.relatedClues}//needs to come from api 
                    allCharacters={data.allCharacters}
                    allFakeClues={gameData.unrelatedClues}//this will end up being just allFakeClues instead of data.
                    victimInfo={victimInfo}
                    detectiveInfo={detectiveInfo}
                  />
                </>
              }
            />
            <Route
              path="/"
              element={<Homepage detectiveInfo={detectiveInfo} />}
            />
            <Route path="/crime" element={<Crime />} />
            <Route path="/scene" element={<Scene />} />
            <Route path="/character" element={<Character />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route
              path="/finalpage"
              element={<Finalpage murdererId={gameData.character} />}
            />
          </Routes>
        </SelectedSuspectProvider>
      </SelectedCluesProvider>
    </div>
  );
}

export default App;
