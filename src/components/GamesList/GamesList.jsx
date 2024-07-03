import './GamesList.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import SingleGame from '../SingleGame/SingleGame';

function GamesList({commonGenres}){
    const [popularList, setPopularList] = useState([{game_id: "", genres: []}]);
    const [gameList, setGameList] = useState([]);
    useEffect (() => {
        const getGenreGames = async () => {
            const data = await axios.post(`http://localhost:8080/games`);
            setPopularList(data.data);
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
        <div className="game-list">
            {popularList.map((game) => {
                console.log(game);
                return (
                    <SingleGame game={game}/>
                )
            })}
        </div>
    )
}

export default GamesList;