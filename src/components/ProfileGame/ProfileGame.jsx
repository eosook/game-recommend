import './ProfileGame.scss'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProfileGame({game, played}){
    const navigate = useNavigate();
    const toGameDescriptionPage = () => {
        navigate(`/description/${game.igdb_id}`);
      };
    return (
        <button className={(played) ? "profile-game played-shadow" : "profile-game future-shadow"} onClick={toGameDescriptionPage}>
            <img className="profile-game__image" src={game.cover_url}></img>
            <h3 className="profile-game__title">{game.title}</h3>
        </button>
    )
}