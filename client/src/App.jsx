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

  const [gameData, setGameData] = useState({
    character: {},
    relatedClues: [],
    unrelatedClues: [],
  });

  useEffect(() => {
    getGameData();
  }, []);

  const getGameData = () => {
    fetch('/api/random')
      .then((response) => response.json())
      .then((random) => {
        setGameData(random);
        console.log(random);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    allMurdererClues={gameData.relatedClues}
                    allFakeClues={gameData.unrelatedClues}
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
            <Route path="/crime" element={<Crime victimInfo={victimInfo} />} />
            <Route path="/scene" element={<Scene />} />
            <Route
              path="/character"
              element={<Character detectiveInfo={detectiveInfo} />}
            />
            <Route path="/instructions" element={<Instructions />} />
            <Route
              path="/finalpage"
              element={<Finalpage murdererId={gameData.character.id} />}
            />
          </Routes>
        </SelectedSuspectProvider>
      </SelectedCluesProvider>
    </div>
  );
}

export default App;
