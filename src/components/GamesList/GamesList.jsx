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
            const data = await axios.post(`http://localhost:8080/games/popular`, {genres: commonGenres});
            setPopularList(data.data);
            console.log(data.data);
        }
        if (commonGenres.length > 0){
            getPopularData();
        }
    }, [commonGenres])
    return (
        <>
            {/* <div>{popularList[0]}</div>
            <div>{popularList[1]}</div> */}
        </>
    )
}

export default GamesList;