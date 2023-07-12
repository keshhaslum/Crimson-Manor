//logo 
//user character emoji
//box shows 3 added clues
//"who committed the crime?"
//get characters by id
//handle event function, when you click on a subject if is murderer return "correct"
//else return to homepage

//back to start button navigate to homepage

import React from 'react'
import { Link } from "react-router-dom";


export default function Finalpage() {
  return (
    <div>
        <h2>Who committed the crime?</h2>


        
        
        
<Link to={`/homepage/`}>
<button>Back to start
</button></Link>
   </div>
  )
}
