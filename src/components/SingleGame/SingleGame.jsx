import { useNavigate } from "react-router-dom";
import "./SingleGame.scss";
import Genre from "../Genre/Genre";

export default function SingleGame({ game }) {
  const navigate = useNavigate();
  const toGameDescriptionPage = () => {
    navigate(`/description/${game.id}`);
  };
  console.log(game.genres);
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
          <div className="single-game__genres">
            {game.genres.map((genre, index) => {
              return (
                <p
                  className={
                    index == 0
                      ? `genre genre-color__one`
                      : index == 1
                      ? `genre genre-color__two`
                      : index == 2
                      ? `genre genre-color__three`
                      : index == 3
                      ? `genre genre-color__four`
                      : index == 4
                      ? `genre genre-color__five`
                      : `genre`
                  }
                >
                  {genre.name}
                </p>
              );
              // return (
              //   <Genre key={index} genreId={genre.id} index={index}/>
              // )
            })}
          </div>
        </div>
        <div className="single-game__rating">
          {Math.floor(game.total_rating)}
        </div>
      </div>
    </button>
  );
}
