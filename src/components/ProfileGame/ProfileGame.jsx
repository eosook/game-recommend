import "./ProfileGame.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import trashcan from "../../assets/images/trashcan.png";

export default function ProfileGame({
  game,
  played,
  userId,
  changeUser,
  setRefreshList,
  setUserPlayedList,
  setUserFutureList,
}) {
  const navigate = useNavigate();
  const toGameDescriptionPage = () => {
    navigate(`/description/${game.igdb_id}`);
  };
  const removePlayedGame = async () => {
    await axios.delete(
      `http://localhost:8080/profile/played_games/${game.users_id}`,
      {
        data: { game_id: game.id },
      }
    );
    setUserPlayedList((prev) =>
      prev.filter((id) => {
        return id !== game.igdb_id;
      })
    );
    setRefreshList((prev) => prev + 1);
  };
  const removeFutureGame = async () => {
    await axios.delete(
      `http://localhost:8080/profile/future_games/${game.users_id}`,
      {
        data: { game_id: game.id },
      }
    );
    setUserFutureList((prev) =>
      prev.filter((id) => {
        return id !== game.igdb_id;
      })
    );
    setRefreshList((prev) => prev + 1);
  };
  return (
    <div className="profile-game">
      <button
        className={
          played
            ? "profile-game__button played-shadow"
            : "profile-game__button future-shadow"
        }
        onClick={toGameDescriptionPage}
      >
        <img className="profile-game__image" src={game.cover_url}></img>
        <div>
          <h3 className="profile-game__title">{game.title}</h3>
        </div>
      </button>
      <img
        className="profile-game__delete"
        onClick={played ? removePlayedGame : removeFutureGame}
        src={trashcan}
      ></img>
    </div>
  );
}
