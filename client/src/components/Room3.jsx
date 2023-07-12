//logo
//emoji for user character
//Room3
//box to add clues (add function applied here, including clues added from room 1 & 2)
//clue in middle with description
//3 clues in box (for each room) - getclueby id
//get characters by id for 3 suspects

//arrow navigate to Final page

import React from 'react'
import { Link } from "react-router-dom";


export default function Room3() {
  return (
    <div>
        
        <h2>Room 3</h2>
        
        
<Link to={`/finalpage/`}>
<button>Make your decision
</button></Link>   
   
   </div>
  )
}
