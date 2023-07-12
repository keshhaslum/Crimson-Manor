//logo
//emoji for user character
//Room1 
//box to add clues (add function applied here)
//clue in middle with description
//3 clues in box (for each room) - getclueby id
//get characters by id for 3 suspects

//arrow navigate to room 2

import React from 'react'
import { Link } from "react-router-dom";


export default function Room1() {
  return (
    <div>
        <h2>Room 1</h2>


<Link to={`/room2/`}>
<button>Next
</button></Link>    
    </div>
  )
}
