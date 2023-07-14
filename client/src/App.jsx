import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Crime from './components/Crime';
import Scene from './components/Scene';
import Character from './components/Character';
import Instructions from './components/Instructions';
import Finalpage from './components/Finalpage';
import Homepage from './components/Homepage';
import Rooms from './components/Rooms';
import data from './mockData';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/crime" element={<Crime />}></Route>
        <Route path="/scene" element={<Scene />}></Route>
        <Route path="/character" element={<Character />}></Route>
        <Route path="/instructions" element={<Instructions />}></Route>

        <Route path="/finalpage" element={<Finalpage />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route
          path="/rooms"
          element={
            <Rooms
              allRooms={data.allRooms}
              allFakeClues={data.allFakeClues}
              allMurdererClues={data.allMurdererClues}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
