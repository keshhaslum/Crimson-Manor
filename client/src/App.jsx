import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Crime from './components/Crime';
import Scene from './components/Scene';
import Character from './components/Character';
import Instructions from './components/Instructions';
import Finalpage from './components/Finalpage';
import Homepage from './components/Homepage';
import ChosenClues from './components/ChosenClues';
import Rooms from './components/Rooms';
import { CluesProvider } from './clues';
// Temporary
import data from './mockData';

// function App() {
//   return (
//     <div>
//       <CluesProvider>
//         <Routes>
//           <Route path="/crime" element={<Crime />}></Route>
//           <Route path="/scene" element={<Scene />}></Route>
//           <Route path="/character" element={<Character />}></Route>
//           <Route path="/instructions" element={<Instructions />}></Route>

//           <Route path="/finalpage" element={<Finalpage />}></Route>
//           <Route path="/homepage" element={<Homepage />}></Route>
//           <Route
//             path="/rooms"
//             element={
//               <Rooms
//                 allRooms={data.allRooms}
//                 allFakeClues={data.allFakeClues}
//                 allMurdererClues={data.allMurdererClues}
//               ></Rooms>
//             }
//           >
//             <ChosenClues></ChosenClues>
//           </Route>
//         </Routes>
//       </CluesProvider>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <CluesProvider>
        <Routes>
          <Route path="/crime" element={<Crime />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/character" element={<Character />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/finalpage" element={<Finalpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route
            path="/rooms"
            element={
              <>
                <Rooms
                  allRooms={data.allRooms}
                  allFakeClues={data.allFakeClues}
                  allMurdererClues={data.allMurdererClues}
                />
                <ChosenClues />
              </>
            }
          />
        </Routes>
      </CluesProvider>
    </div>
  );
}

export default App;
