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
import Finalpage from './components/Finalpage';

// Temporary
import data from './mockData';

function App() {
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
                />
              </>
            }
          />
          <Route
            path="/finalpage"
            element={<Finalpage murdererId={data.murderer} />}
          />
        </Routes>
      </CluesProvider>
    </div>
  );
}

export default App;
