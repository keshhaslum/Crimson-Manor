//logo
//The crime title
//img of victim
//description of crime
//arrow navigating back to scene
//arrow navigating towards character in game
import React from 'react'
import { Link } from "react-router-dom";


export default function Crime() {
  return (
    <div>
<h2>The crime</h2>

<h1>🤵</h1>
<p>John Parker was a wealthy businessman known for his cutthroat tactics in the corporate world. He was found dead in the study of his luxurious mansion, shot in the head. The murder weapon, a rare antique pistol, was found near the body.</p>
   

<Link to={`/scene/`}>
<button>Previous
</button></Link>

<Link to={`/character/`}>
<button>Next
</button></Link>


   
    </div>
  )
}
