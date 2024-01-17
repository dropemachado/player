import "./styles.css";

function Card({ title, description, cover }) {
  return (
    <div className="card__content">
      <img className="card__image" src={cover} alt="capa da música" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
