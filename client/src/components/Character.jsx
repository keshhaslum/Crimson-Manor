//logo
//your character title
//description of character
//arrow navigating back to crime and forward to Instructions

import React from 'react'
import { Link } from "react-router-dom";




export default function Character() {
  return (
    <div>
      <h2>Your Character</h2>
      <h1>🕵️‍♀️</h1>
      <p>Detective Sarah Williams is a seasoned investigator with a sharp mind and keen attention to detail. She has an impressive track record of solving complex cases and has a reputation for always getting to the truth.</p>

<Link to={`/crime/`}>
<button>Previous
</button></Link>

<Link to={`/instructions/`}>
<button>Next
</button></Link>

    </div>
  )
}
