import "./GamesList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleGame from "../SingleGame/SingleGame";
import Genre from "../Genre/Genre";

function GamesList({ commonGenres, gameIds, userPlayedList, userFutureList }) {
  const [popularList, setPopularList] = useState([{ game_id: "", genres: [] }]);
  
  useEffect(() => {
    const getPopularDataUser = async () => {
      let playedList = userPlayedList.map((id) => parseInt(id))
      let futureList = userFutureList.map((id) => parseInt(id))
      const data = await axios.post(`http://localhost:8080/games/popular`, {
        genres: commonGenres,
        ids: gameIds,
        played: playedList,
        future: futureList
      });
      setPopularList(data.data);
    };
    const getPopularData = async () => {
      const data = await axios.post(`http://localhost:8080/games/popular`, {
        genres: commonGenres,
        ids: gameIds,
        played: ["1"],
        future: ["1"]
      });
      setPopularList(data.data);
    };
    if (commonGenres.length > 0) {
      if (userPlayedList.length > 0 && userFutureList.length > 0){
        getPopularDataUser();
      } else {
        getPopularData();
      }
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
