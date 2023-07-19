import { Link } from 'react-router-dom';
import '../App.css';

export default function Homepage({ detectiveInfo }) {
  return (
    <div className="homepage component-container">
      <img
        className="logo-homepage"
        src="https://cdn.bfldr.com/Z0BJ31FP/at/k84gx4pxhs6tkrntkzpjf4n/crimson-manor-logo.svg"
        alt="Crimson Manor Logo"
      />
      <h2 className="icon">{detectiveInfo.img}</h2>

      <Link to={`/scene/`}>
        <button className="button">Start</button>
      </Link>
    </div>
  );
}
