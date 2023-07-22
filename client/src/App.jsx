import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Crime from './components/Crime';
import Scene from './components/Scene';
import Character from './components/Character';
import Instructions from './components/Instructions';
import Finalpage from './components/Finalpage';
import Homepage from './components/Homepage';
import Rooms from './components/Rooms';
import { CluesProvider } from './clues';
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
          <Route path= "/instructions" element={<Instructions allFakeClues={data.allFakeClues}/>}></Route>
          <Route path="/rooms" element={<>
                <Rooms
                  allRooms={data.allRooms}
                  allFakeClues={data.allFakeClues}
                  allMurdererClues={data.allMurdererClues}
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
