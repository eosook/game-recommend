import "./RecommendationPage.scss";
import GamesList from "../../components/GamesList/GamesList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RecommendationPage() {
  const location = useLocation();
  const [genreList, setGenreList] = useState([]);
  const [commonGenres, setCommonGenres] = useState([]);
  const [mostCommonGenres, setMostCommonGenres] = useState([]);
  const { games, count } = location.state;

  useEffect(() => {
    const findCommonGenres = async () => {
      if (count == 1) {
        setCommonGenres(games[0].genres);
        console.log(games[0].genres);
      } else if (count == 2) {
        setGenreList(games[0].genres);
        setCommonGenres([]);
        games[1].genres.forEach((genre) => {
          if (games[0].genres.includes(genre)) {
            setCommonGenres((genreList) => [...genreList, genre]);
          }
        });
      } else {
        setCommonGenres([]);
        setMostCommonGenres([]);
        console.log(commonGenres);
        games[1].genres.forEach((genre) => {
          if (games[0].genres.includes(genre)) {
            setCommonGenres((genreList) => [...genreList, genre]);
          }
        });
        games[2].genres.forEach((genre) => {
          if (
            games[0].genres.includes(genre) &&
            games[1].genres.includes(genre)
          ) {
            setMostCommonGenres((genreList) => [...genreList, genre]);
          } else if (games[0].genres.includes(genre)) {
            setCommonGenres((genreList) => [...genreList, genre]);
          } else if (games[1].genres.includes(genre)) {
            setCommonGenres((genreList) => [...genreList, genre]);
          }
        });
      }
    };
    findCommonGenres();
  }, []);
  return (
    <div className="recommendation">
      <header>
        <h1 className="recommendation__header">Recommendations</h1>
      </header>
      <div className="recommendation__list">
      <GamesList
        commonGenres={
          mostCommonGenres.length > 0
            ? mostCommonGenres
            : commonGenres.length > 0
            ? commonGenres
            : genreList
        }
      />
      </div>
    </div>
  );
}

export default RecommendationPage;
