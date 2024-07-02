import './GamesList.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

function GamesList({commonGenres}){
    const [popularList, setPopularList] = useState([{game_id: ""}]);
    const [gameList, setGameList] = useState([]);
    useEffect (() => {
        const getGenreGames = async () => {
            const data = await axios.post(`http://localhost:8080/games`);
            setPopularList(data.data);
            console.log(data.data);
        }
        getGenreGames();
    }, [])
    useEffect (() => {
        const getPopularData = async () => {
            const data = await axios.post(`http://localhost:8080/games/popular`);
            setPopularList(data.data);
            console.log(data.data);
        }
        getPopularData();
    }, [])
    return (
        <>
            <div>{popularList[0].game_id}</div>
        </>
    )
}

export default GamesList;