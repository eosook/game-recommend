import { useNavigate } from "react-router-dom";
import "./SingleGame.scss";

export default function SingleGame({ game }) {
  const navigate = useNavigate();
  const toGameDescriptionPage = () => {
    navigate(`/description/${game.id}`);
  };
  return (
    <button className="single-game" onClick={toGameDescriptionPage}>
      <img
        className="single-game__cover"
        src={
          game.cover !== undefined
            ? `${game.cover.url.replace(/t_thumb/, "t_1080p")}`
            : ""
        }
      />
      <div className="single-game__info">
        <div className="single-game__info-container">
          <h2 className="single-game__title">{game.name}</h2>
          <p className="single-game__summary">{game.summary}</p>
        </div>
        <div className="single-game__rating">
          {Math.floor(game.total_rating)}
        </div>
      </div>
      <div className="single-game__genres">
        {game.genres.map((genre) => {
          return <p>{genre.name}</p>;
        })}
      </div>
    </button>
  );
}
