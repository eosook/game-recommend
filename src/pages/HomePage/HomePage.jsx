import "./HomePage.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import GamesForm from "../../components/GamesForm/GamesForm";
import RelatedSearch from "../../components/RelatedSearch/RelatedSearch";
import HeaderProfile from "../../components/HeaderProfile/HeaderProfile";

function HomePage() {
  const [gameList, setGameList] = useState([]);
  const [favGameOne, setFavGameOne] = useState("");
  const [favGameTwo, setFavGameTwo] = useState("");
  const [favGameThree, setFavGameThree] = useState("");
  const [gameCount, setGameCount] = useState(1);
  const [gameTitle, setGameTitle] = useState({ name: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const toRecommendationPage = () => {
    navigate("/recommendations", {
      state: {
        games: [favGameOne, favGameTwo, favGameThree],
        count: gameCount - 1,
      },
    });
  };

  useEffect(() => {
    const getGameList = async () => {
      const gameListData = await axios.post(
        `http://localhost:8080/games`,
        gameTitle
      );
      let list = [];
      gameListData.data.forEach((game) => {
        list.push(game);
      });
      setGameList(list);
    };
    getGameList();
  }, [gameTitle]);

  function selectGame(game, count) {
    if (count == 1) {
      setFavGameOne(game);
      console.log(game);
    } else if (count == 2) {
      setFavGameTwo(game);
      console.log(game);
    } else {
      setFavGameThree(game);
      console.log(game);
    }
    setGameList([]);
    setGameCount(gameCount + 1);
  }
  return (
    <main className="main">
      <div className="favourite">
        <h1 className="favourite__header">GameRec</h1>
        <div className="favourite__inputs">
          <div className="favourite__form">
            <h2 className="favourite__header"></h2>
            <GamesForm
              setGameTitle={setGameTitle}
              title={favGameOne}
              formNumber={1}
              gameCount={gameCount}
            />
            <GamesForm
              setGameTitle={setGameTitle}
              title={favGameTwo}
              formNumber={2}
              gameCount={gameCount}
            />
            <GamesForm
              setGameTitle={setGameTitle}
              title={favGameThree}
              formNumber={3}
              gameCount={gameCount}
            />

            <button
              className="recommend-button"
              onClick={toRecommendationPage}
              disabled={favGameOne == "" ? true : false}
            >
              Recommend
            </button>
          </div>
          <div className="related-search__list">
            {gameList.map((game) => {
              return (
                <RelatedSearch
                  game={game}
                  setGameTitle={setGameTitle}
                  selectGame={selectGame}
                  gameCount={gameCount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
