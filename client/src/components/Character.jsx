import { Link } from 'react-router-dom';

export default function Character() {
  return (
    <div className="character component-container">
      <h1 className="title">Your Character</h1>
      <h2 className="icon">🕵️‍♀️</h2>
      <p className="description">
        Detective Sarah Williams is a seasoned investigator with a sharp mind
        and keen attention to detail. She has an impressive track record of
        solving complex cases and has a reputation for always getting to the
        truth.
      </p>

      <Link to={`/instructions/`}>
        <button className="button">Continue</button>
      </Link>
    </div>
  );
}
