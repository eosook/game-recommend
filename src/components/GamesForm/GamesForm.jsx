import "./GamesForm.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Combobox from "react-widgets/Combobox";

function GamesForm() {
  const [gameList, setGameList] = useState([]);
  const [favGameOne, setFavGameOne] = useState("");
  const [favGameTwo, setFavGameTwo] = useState("");
  const [favGameThree, setFavGameThree] = useState("");
  const [gameTitle, setGameTitle] = useState({
    name: "",
  });

  useEffect(() => {
    const getGameList = async () => {
      const gameListData = await axios.post(
        `http://localhost:8080/games`,
        gameTitle
      );
      let list = [];
      gameListData.data.forEach((game) => {
        console.log(game);
        list.push({
          id: game.id,
          name: game.name
        });
      });
      setGameList(list);
    };
    getGameList();
  }, [gameTitle]);
  useEffect(() => {
    console.log(favGameOne);
  }, [favGameOne]);
  return (
    <div className="games-form">
      <h2 className="games-form__header">Header</h2>
      <form className="games-form__form">
        <Combobox
          className="games-form__combobox"
          hideCaret
          hideEmptyPopup
          data={gameList}
          onChange={(value) => setGameTitle({ name: value })}
          onSelect={(value) => setFavGameOne(value)}
          placeholder="Enter your favourite game"
        />
        <Combobox
          hideCaret
          hideEmptyPopup
          data={["Red", "Yellow", "Blue", "Orange"]}
          placeholder="Search for a color"
          
        />
        <div className="games-form__buttons">
          <button className="games-form__submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default GamesForm;
