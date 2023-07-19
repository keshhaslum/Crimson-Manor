import './styles/modal.css';

export default function Modal({ object, onClose }) {
  return (
    <div className="modal-container">
      <p className="close-icon" onClick={onClose}>
        ❌
      </p>
      <p className="image">{object.img}</p>
      <p className="description">{object.description}</p>
      <button className="guess-button">It was you!</button>
    </div>
  );
}
