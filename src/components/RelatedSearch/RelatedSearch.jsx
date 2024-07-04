import './RelatedSearch.scss';

export default function RelatedSearch({game, selectGame, gameCount}){
    console.log(game);
    return (
        <button className="related-search__button related-search__button-animated" onClick={() => selectGame(game, gameCount)}>
            {game.name}
        </button>
    );
}