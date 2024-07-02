import "./GamesForm.scss";

export default function GamesForm({ setGameTitle, title, formNumber, gameCount }) {
  return (
    <form className="games-form__form">
      <input
        type="text"
        className="games-form__input"
        disabled={(formNumber == gameCount) ? false : true}
        onChange={(e) => setGameTitle({ name: e.target.value })}
        placeholder="Enter your favourite game"
      ></input>
      <div className="games-form__buttons">
        <button className="games-form__submit" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}
