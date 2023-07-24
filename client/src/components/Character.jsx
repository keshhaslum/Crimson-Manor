import { Link } from 'react-router-dom';

export default function Character({ detectiveInfo }) {
  return (
    <div className="character component-container">
      <h1 className="title">Your Character</h1>
      <h2 className="icon">{detectiveInfo.img}</h2>
      <p className="description">{detectiveInfo.description}</p>

      <Link to={`/instructions/`}>
        <button className="button">Continue</button>
      </Link>
    </div>
  );
}
