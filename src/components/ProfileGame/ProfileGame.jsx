import "./ProfileGame.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfileGame({ game, played, userId, changeUser, setRefreshList }) {
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
    setRefreshList((prev) => prev + 1);
  };
  const removeFutureGame = async () => {
    await axios.delete(
      `http://localhost:8080/profile/future_games/${game.users_id}`,
      {
        data: { game_id: game.id },
      }
    );
    setRefreshList((prev) => prev + 1);
  };
  return (
    <div>
      <button
        className={
          played ? "profile-game played-shadow" : "profile-game future-shadow"
        }
        onClick={toGameDescriptionPage}
      >
        <img className="profile-game__image" src={game.cover_url}></img>
        <div>
          <h3 className="profile-game__title">{game.title}</h3>
        </div>
      </button>
      <button onClick={played ? removePlayedGame : removeFutureGame}>
        remove
      </button>
    </div>
  );
}
