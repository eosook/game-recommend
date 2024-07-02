import './RelatedSearch.scss';

export default function RelatedSearch({game, setGameTitle, selectGame, gameCount}){
    console.log(game);
    return (
        <button onClick={() => selectGame(game, gameCount)}>
            {game.name}
        </button>
    );
}