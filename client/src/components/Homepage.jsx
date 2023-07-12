import React from 'react'
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
  <h1>Crimson Manor</h1>
   
  <h1>🕵️‍♀️</h1>
  <h3>Solve the murder mystery</h3>

<Link to={`/scene/`}>
<button>Start
</button></Link>

    </div>
  )
}
