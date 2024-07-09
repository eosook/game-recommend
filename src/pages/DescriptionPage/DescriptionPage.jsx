import "./DescriptionPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Genre from "../../components/Genre/Genre";
import Screenshots from "../../components/Screenshots/Screenshots";
import checkmark from '../../assets/images/checkmark.png';
import youtubeLogo from '../../assets/images/youtube.png';

export default function DescriptionPage({
  user,
  userPlayedList,
  userFutureList,
  setUserPlayedList,
  setUserFutureList
}) {
  const gameId = useParams();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState("N/A");
  const [screenshots, setScreenshots] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [releaseDate, setReleaseDate] = useState(null);
  const [video, setVideo] = useState(null);
  const [cover, setCover] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [played, setPlayed] = useState(false);
  const [future, setFuture] = useState(false);

  useEffect(() => {
    const getGame = async () => {
      const gameData = await axios.post(
        `http://localhost:8080/games/${gameId.id}`
      );
      setName(gameData.data[0].name);
      setDescription(gameData.data[0].summary);
      setScreenshots(gameData.data[0].screenshots);
      setGenreIds(gameData.data[0].genres);
      setCover(gameData.data[0].cover.url.replace(/t_thumb/, "t_1080p"));
      if ("total_rating" in gameData.data[0]) {
        setRating(Math.floor(gameData.data[0].total_rating));
      }
      if ("videos" in gameData.data[0]) {
        setVideo(gameData.data[0].videos[0].video_id);
      }
      if ("first_release_date" in gameData.data[0]) {
        let date = new Date(gameData.data[0].first_release_date * 1000);
        setReleaseDate(date.toLocaleDateString("en-US"));
      }
      if (userPlayedList.includes('' + gameData.data[0].id)){
        setPlayed(true);
      }
      if (userFutureList.includes('' + gameData.data[0].id)){
        setFuture(true);
      }
    };
    getGame();
  }, []);

  const addPlayedGame = async () => {
    try {
      const sendResponse = await axios.post(
        `http://localhost:8080/profile/played_games/${user}`,
        {
          users_id: user,
          igdb_id: `${gameId.id}`,
          title: name,
          cover_url: cover,
        }
      );
      setUserPlayedList((prev) => [...prev, '' + gameId.id]);
      setPlayed(true);
      return sendResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const addFutureGame = async () => {
    try {
      const sendResponse = await axios.post(
        `http://localhost:8080/profile/future_games/${user}`,
        {
          users_id: user,
          igdb_id: `${gameId.id}`,
          title: name,
          cover_url: cover,
        }
      );
      setUserFutureList((prev) => [...prev, '' + gameId.id]);
      setFuture(true);
      return sendResponse;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="game-page">
      <main className="game">
        <h1 className="game__title">{name}</h1>
        <div className="game-body">
          <img className="game-cover" src={cover}></img>
          <div className="game-info">
            <div className="game-info__description">{description}</div>
            <div className="game-info__additional">
              <div className="game-info__release-date">
                Release Date: {releaseDate}
              </div>
              <div className="game-info__rating">{rating}</div>
            </div>
          </div>
        </div>
        <div className="game__buttons">
          <button className={(played) ? `game__button game__button--green` : 'game__button'} onClick={addPlayedGame} disabled={(user) ? played : true}>
            {(played) ? "Added" : `Played`}
            {(played) ? <img className="game__button--checkmark" src={checkmark}></img> : ""}
          </button>
          <button className={(future) ? `game__button game__button--green` : 'game__button'} onClick={addFutureGame} disabled={(user) ? future : true}>
            {(future) ? "Added" : "Play Later"}
            {(future) ? <img className="game__button--checkmark" src={checkmark}></img> : ""}
          </button>
          <button
            className="game__button game__button--youtube"
            onClick={() =>
              window.open(`https://www.youtube.com/watch?v=${video}`, "_blank")
            }
          >
            Youtube<img className="game__button--youtube-logo" src={youtubeLogo}></img>
          </button>
        </div>
        <div className="game-banner">
          <div className="game-banner__genres">
            {genreIds.map((genreId, index) => {
              return <Genre key={index} genreId={genreId} index={index} />;
            })}
          </div>
        </div>
        <div className="screenshots">
          <h2 className="screenshots__header">Screenshots</h2>
          <div className="screenshots__slider-wrapper">
            <div className="screenshots__slider">
              {screenshots.map((screenshot, index) => {
                return (
                  <Screenshots
                    key={index}
                    screenshot={screenshot}
                    index={index}
                  />
                );
              })}
            </div>
            <div className="screenshots__slider-nav">
              {screenshots.map((screenshot, index) => {
                return (
                  <a
                    key={index}
                    href={`#slide-${index}`}
                    className="screenshots__slider-bullet"
                  ></a>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
