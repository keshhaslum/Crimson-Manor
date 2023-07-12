//logo
//emoji for user character
//Room2 
//box to add clues (add function applied here - including clue added from room 1)
//clue in middle with description
//3 clues in box (for each room) - getclueby id
//get characters by id for 3 suspects

//arrow navigate to room 3

import React from 'react'
import { Link } from "react-router-dom";


export default function Room2() {
  return (
    <div>
        <h2>Room 2</h2>
        
        

<Link to={`/room3/`}>
<button>Next
</button></Link>    
    </div>
        
    
  )
}
