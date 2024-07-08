import "./GamesList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleGame from "../SingleGame/SingleGame";
import Genre from "../Genre/Genre";

function GamesList({ commonGenres, gameIds }) {
  const [popularList, setPopularList] = useState([{ game_id: "", genres: [] }]);
  
  useEffect(() => {
    const getPopularData = async () => {
      const data = await axios.post(`http://localhost:8080/games/popular`, {
        genres: commonGenres,
        ids: gameIds,
      });
      setPopularList(data.data);
      console.log(data.data)
    };
    if (commonGenres.length > 0) {
      getPopularData();
    }
  }, [commonGenres]);
  return (
    <div className="game-list">
      <h3>You enjoy Playing :</h3>
      <div className="game-list__genres">
        {commonGenres.map((genreId, index) => {
          return <Genre key={index} genreId={genreId} index={index} />;
        })}
      </div>
      {popularList.map((game, index) => {
        return <SingleGame key={index} game={game} />;
      })}
    </div>
  );
}

export default GamesList;
