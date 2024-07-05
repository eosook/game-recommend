import './ProfilePage.scss'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import FutureGames from '../../components/FutureGames/FutureGames';
import PlayedGames from '../../components/PlayedGames/PlayedGames';

export default function ProfilePage(){
    const [user, setUser] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getProfile = async () => {
            const userData = await axios.get(`http://localhost:8080/profile/${id}`);
            setUser(userData.data[0])
        }
        getProfile();
    }, [])
    return (
        <div className="profile">
            {user.name}
            <div className="played-list">
                <PlayedGames id={id}/>
            </div>
            <div className="future-list">
                <FutureGames id={id}/>
            </div>
        </div>
    )
}