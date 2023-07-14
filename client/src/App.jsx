import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Crime from "./components/Crime";
import Scene from "./components/Scene";
import Character from "./components/Character";
import Instructions from "./components/Instructions";
//import Room1 from "./components/Room1";
//import Room2 from "./components/Room2";
//import Room3 from "./components/Room3";
import Finalpage from "./components/Finalpage";
import Homepage from './components/Homepage';
import Rooms from "./components/Rooms";
import data from "./mockData";



function App() {
  // console.log(data.allRooms[0]);
  // console.log(data.allFakeClues[0]);

return (
<div>
<Routes>
        <Route path="/crime" element={<Crime />}></Route>
        <Route path="/scene" element={<Scene />}></Route>
        <Route path= "/character" element={<Character />}></Route>
        <Route path= "/instructions" element={<Instructions/>}></Route>
        {/*<Route path= "/room1" element={<Room1/>}></Route>*/}
        {/*<Route path= "/room2" element={<Room2/>}></Route>*/}
        {/*<Route path= "/room3" element={<Room3/>}></Route>*/}

        {/* {allRooms.map((room) => {
          return (
            <Route
              key={room.id}
              path={`/rooms${room.room}`}
              element={<Rooms rooms={allRooms} fakeClues = {allFakeClues} murdererClues = {allMurdererClues}/>}
            />
          );
        })} */}
        <Route path= "/finalpage" element={<Finalpage/>}></Route>
     <Route path= "/homepage" element={<Homepage/>}></Route>
     <Route path= "/rooms" element={<Rooms allRooms={data.allRooms} allFakeClues={data.allFakeClues}
     allMurdererClues={data.allMurdererClues}/>}></Route>
      </Routes>

</div>
)




}

export default App
