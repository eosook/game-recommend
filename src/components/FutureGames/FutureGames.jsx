import './FutureGames.scss'
import axios from 'axios'
import {useEffect, useState} from 'react'
import ProfileGame from '../ProfileGame/ProfileGame';

export default function FutureGames({ id }){
    const [futureList, setFutureList] = useState([]);

    useEffect(() => {
        const getProfile = async () => {
            const playedData = await axios.get(`http://localhost:8080/profile/future_games/${id}`);
            setFutureList(playedData.data)
        }
        getProfile();
    }, [])
    return (
        <div>
        {futureList.map((game, index) => {
            return (
                <ProfileGame key={index} game={game} played={false}/>
            )
        })}
    </div>
    )
}