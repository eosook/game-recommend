import './PlayedGames.scss'
import axios from 'axios'
import {useEffect, useState} from 'react'
import ProfileGame from '../ProfileGame/ProfileGame';

export default function PlayedGames({ id, changeUser, refreshList, setRefreshList }){
    const [playedList, setPlayedList] = useState([]);

    useEffect(() => {
        const getProfile = async () => {
            const playedData = await axios.get(`http://localhost:8080/profile/played_games/${id}`);
            setPlayedList(playedData.data)
        }
        getProfile();
    }, [refreshList])
    return (
        <div>
            {playedList.map((game, index) => {
                return (
                    <ProfileGame key={index} game={game} played={true} userId={id} changeUser={changeUser} setRefreshList={setRefreshList}/>
                )
            })}
        </div>
    )
}