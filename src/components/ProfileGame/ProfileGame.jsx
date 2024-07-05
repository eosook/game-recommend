import './ProfileGame.scss'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProfileGame({game}){
    const navigate = useNavigate();
    const toGameDescriptionPage = () => {
        navigate(`/description/${game.igdb_id}`);
      };
    return (
        <button className="profile-game" onClick={toGameDescriptionPage}>
            <img className="profile-game__image" src={game.cover_url}></img>
            <h3 className="profile-game__title">{game.title}</h3>
        </button>
    )
}