import "./SearchPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [gameTitle, setGameTitle] = useState("");
  const [gameList, setGameList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getGameList = async () => {
      const gameListData = await axios.post(`http://localhost:8080/games`, {
        gameTitle: gameTitle,
        limit: 20,
      });
      let list = [];
      gameListData.data.forEach((game) => {
        list.push(game);
      });
      setGameList(list);
    };
    if (gameTitle) {
      getGameList();
    }
  }, [gameTitle]);

  const selectGame = (id) => {
    navigate(`/description/${id}`);
  };
  return (
    <div className="search">
        <h1 className="search__header">SEARCH FOR A GAME</h1>
      <div>
        <input
        className="search__bar"
          type="text"
          onChange={(e) => setGameTitle({ name: e.target.value })}
        ></input>
      </div>
      <div className="search__list">
        {gameList.map((game, index) => {
          return (
            <button
              className="related-search__button related-search__button-animated search__button"
              onClick={() => selectGame(game.id)}
              key={index}
            >
              {game.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
