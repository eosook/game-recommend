import "./GamesForm.scss";

export default function GamesForm({ setGameTitle, title, formNumber, gameCount }) {
  return (
    <form className="games-form__form">
      <input
        type="text"
        className="games-form__input"
        value={(gameCount > formNumber) ? title.name : null}
        disabled={(formNumber == gameCount) ? false : true}
        onChange={(e) => setGameTitle({ name: e.target.value })}
        placeholder="Enter your favourite game"
      ></input>
    </form>
  );
}
