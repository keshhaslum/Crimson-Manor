import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Crime from "./components/Crime";
import Scene from "./components/Scene";
import Character from "./components/Character";
import Instructions from "./components/Instructions";
import Room1 from "./components/Room1";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";
import Finalpage from "./components/Finalpage";
import Homepage from './components/Homepage';



function App() {
return (
<div>
<Routes>
        <Route path="/crime" element={<Crime />}></Route>
        <Route path="/scene" element={<Scene />}></Route>
        <Route path= "/character" element={<Character />}></Route>
        <Route path= "/instructions" element={<Instructions/>}></Route>
        <Route path= "/room1" element={<Room1/>}></Route>
        <Route path= "/room2" element={<Room2/>}></Route>
        <Route path= "/room3" element={<Room3/>}></Route>
        <Route path= "/finalpage" element={<Finalpage/>}></Route>
        <Route path= "/homepage" element={<Homepage/>}></Route>

      </Routes>

</div>
)




}

export default App
