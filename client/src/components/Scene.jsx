//logo
//emoji of house
//setting scene description
//continue button navigate to Crime

import React from 'react';
import { Link } from "react-router-dom";


export default function Scene() {
  return (
    <div>
        <h2>The scene</h2>
      <h1>🏠</h1>
    
    
    <p>As the heavy iron gates of Crimson Manor swing open with an eerie creak, you step into a world frozen in time.
 The clock strikes midnight, a blood-curdling scream pierces the silence. A murder has been committed within the walls of Crimson Manor, and you find yourself thrust into a web of deceit, secrets, and hidden motives. Can you navigate the treacherous halls, unravel the truth, and expose the killer before the night's end? The stage is set, and the game of life and death begins in Crimson Manor.</p>
    
 <Link to={`/crime/`}>
<button>Continue
</button></Link>
    
    </div>
  )
}
