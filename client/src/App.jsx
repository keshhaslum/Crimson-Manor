// React
import { Routes, Route, Link } from 'react-router-dom';
import { CluesProvider } from './clues';

// Styles
import './App.css';

// Pages
import Homepage from './components/Homepage';
import Crime from './components/Crime';
import Scene from './components/Scene';
import Character from './components/Character';
import Instructions from './components/Instructions';
import Rooms from './components/Rooms';
// import Finalpage from './components/Finalpage';

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

  return (
    <div className="game-container">
      <CluesProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/crime" element={<Crime />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/character" element={<Character />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/rooms"
            element={
              <>
                <Rooms
                  allRooms={data.allRooms}
                  allFakeClues={data.allFakeClues}
                  allMurdererClues={data.allMurdererClues}
                  allCharacters={data.allCharacters}
                  victimInfo={victimInfo}
                  detectiveInfo={detectiveInfo}
                />
              </>
            }
          />
          {/* <Route
            path="/finalpage"
            element={<Finalpage murdererId={data.murderer} />}
          /> */}
        </Routes>
      </CluesProvider>
    </div>
  );
}

export default App;
