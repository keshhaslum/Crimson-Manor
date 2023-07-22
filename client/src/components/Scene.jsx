import { Link } from 'react-router-dom';

export default function Scene() {
  return (
    <div className="scene component-container">
      <h1 className="title">The scene</h1>

      <h2 className="icon">🏠</h2>

      <p className="description">
        As the heavy iron gates of Crimson Manor swing open with an eerie creak,
        you step into a world frozen in time. The clock strikes midnight, a
        blood-curdling scream pierces the silence. A murder has been committed
        within the walls of Crimson Manor, and you find yourself thrust into a
        web of deceit, secrets, and hidden motives. Can you navigate the
        treacherous halls, unravel the truth, and expose the killer before the
        night's end? The stage is set, and the game of life and death begins in
        Crimson Manor.
      </h5>
      
      <Link to={`/`}>
        <button className="regular-button">Previous</button>
      </Link>

    
      <Link to={`/crime/`}>
        <button className="button">Continue</button>
      </Link>
    </div>
  );
}
