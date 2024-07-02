import './RelatedSearch.scss';

export default function RelatedSearch({game, selectGame, gameCount}){
    console.log(game);
    return (
        <button onClick={() => selectGame(game, gameCount)}>
            {game.name}
        </button>
    );
}