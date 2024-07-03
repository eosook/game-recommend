import { useNavigate } from "react-router-dom";
import "./SingleGame.scss";

export default function SingleGame({ game }) {
  const navigate = useNavigate();
  console.log(game);
  const toGameDescriptionPage = () => {
    navigate(`/description/${game.id}`);
  };
  return (
    <button className="single-game" onClick={toGameDescriptionPage}>
      <img
        className="single-game__screenshot"
        src={
          game.screenshots !== undefined
            ? `${game.screenshots[0].url.replace(/t_thumb/, "t_1080p")}`
            : ""
        }
      />
      <div className="single-game__info">
        <h2 className="single-game__title">{game.name}</h2>
        <p className="single-game__sumamry">{game.summary}</p>
        <div className="single-game__genres">
          {game.genres.map((genre) => {
            return <p>{genre.name}</p>;
          })}
        </div>
        <div className="single-game__rating">
          {Math.floor(game.aggregated_rating)}
        </div>
      </div>
    </button>
  );
}
