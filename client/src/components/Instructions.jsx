//logo
//emoji for user character
//game instructions title
//empty box where clues will be stored
//area for description of clue
//box for 3 clue options (get clue by id)
//3 suspects/emojis at bottom of page (get characters by id)
//arrows forward and backward

import React from 'react'
import { Link } from "react-router-dom";


function getFakeClues () {
 
  const [fakeClues, setFakeClues] = useState([]);

  useEffect(() => {
    getAllFakeClues();
  }, []);



}


export default function Instructions() {
  return (
    <div>
        <h2>Game Instructions</h2>


    <p> <h3 classname="cluesexample">
      Your chosen clues will be stored here.</h3></p>

   <p></p>






<Link to={`/character/`}>
<button>Previous
</button></Link>

<Link to={`/rooms/`}>
<button>Next
</button></Link>
    
    </div>
  )
}
