import "./DescriptionPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Genre from "../../components/Genre/Genre";
import Screenshots from "../../components/Screenshots/Screenshots";

export default function DescriptionPage() {
  const gameId = useParams();
  const [game, setGame] = useState({});
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState("N/A");
  const [screenshots, setScreenshots] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getGame = async () => {
      const gameData = await axios.post(
        `http://localhost:8080/games/${gameId.id}`
      );
      setGame(gameData.data[0]);
      setName(gameData.data[0].name);
      setDescription(gameData.data[0].summary);
      setScreenshots(gameData.data[0].screenshots);
      setGenres([]);
      setGenreIds(gameData.data[0].genres);
      if ("aggregated_rating" in gameData.data[0]) {
        setRating(gameData.data[0].aggregated_rating);
      }
      if ("videos" in gameData.data[0]) {
        setVideo(gameData.data[0].videos[0]);
      }
      if ("first_release_date" in gameData.data[0]) {
        let date = new Date(gameData.data[0].first_release_date * 1000);
        setReleaseDate(date.toLocaleDateString("en-US"));
      }
      console.log(gameData.data[0].genres);
    };
    getGame();
  }, []);

  return (
    <div className="game-page">
      <header className="game-header">
        <img alt="back button"></img>
        <h1 className="game-header__title">{name}</h1>
        <h3>Login</h3>
      </header>
      <main className="game">
        <div className="game-description">{description}</div>
        <div className="game-rating">Rating: {rating}</div>
        <div className="game-genres">
          {genreIds.map((genreId, index) => {
            return <Genre key={index} genreId={genreId} />;
          })}
        </div>
        {/* <Genre genreIds={genreIds}/> */}
        <div className="game-screenshots">
        {screenshots.map((screenshot, index) => {
            return <Screenshots key={index} screenshot={screenshot} />;
          })}
        </div>
        <div className="game-release-date">Release Date: {releaseDate}</div>
      </main>
    </div>
  );
}
