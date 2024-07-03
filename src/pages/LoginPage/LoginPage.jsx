import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <div className="login">
      <form className="login__form">
        <label className="login__label">Username:</label>
        <input type="text" className="login__input"></input>
        <label className="login__label">Password:</label>
        <input type="text" className="login__input"></input>
        <button type="submit" className="login__button">
          Login
        </button>
      </form>
    </div>
  );
}
