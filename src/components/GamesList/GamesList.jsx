import "./GamesList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleGame from "../SingleGame/SingleGame";

function GamesList({ commonGenres }) {
  const [popularList, setPopularList] = useState([{ game_id: "", genres: [] }]);
  const [gameList, setGameList] = useState([]);
  const [genreNameList, setGenreNameList] = useState([]);

  useEffect(() => {
    const getGenreGames = async () => {
      const data = await axios.post(`http://localhost:8080/games`);
      setPopularList(data.data);
    };
    getGenreGames();
  }, []);
  useEffect(() => {
    const getPopularData = async () => {
      const data = await axios.post(`http://localhost:8080/games/popular`, {
        genres: commonGenres,
      });
      setPopularList(data.data);
    };
    if (commonGenres.length > 0) {
      getPopularData();
    }
  }, [commonGenres]);
  useEffect(() => {
    const getGenreNames = async (genreId) => {
      const genreData = await axios.post(
        `http://localhost:8080/games/genre/${genreId}`
      );
      setGenreNameList((genreList) => [...genreList, genreData.data[0].name]);
      console.log(genreData.data[0].name);
    };
    setGenreNameList([]);
    commonGenres.forEach((genreId) => {
      getGenreNames(genreId);
    });
  }, [commonGenres]);
  return (
    <div className="game-list">
        {genreNameList}
      {popularList.map((game) => {
        return <SingleGame game={game} />;
      })}
    </div>
  );
}

export default GamesList;
