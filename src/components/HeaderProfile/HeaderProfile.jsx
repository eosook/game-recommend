import "./HeaderProfile.scss";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderProfile({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const toProfile = () => {
    navigate(`/profile/${user}`);
  };

  const toLogin = () => {
    navigate(`/login`);
  };

  const toHome = () => {
    navigate(`/`);
  };

  const toLastPage = () => {
    navigate(-1);
  };
  const logout = () => {
    setUser(null);
    if (location.pathname == `/profile/${user}`) {
      navigate("/");
    }
  };

  if (user) {
    return (
      <header className="header">
        <div className="header__route-buttons">
          <button className="header__button" onClick={toHome}>HOME</button>
          <button className="header__button" onClick={toLastPage}>BACK</button>
        </div>
        <h2 className="header__logo" onClick={toHome}>GameRec</h2>
        <div className="header__profile-buttons">
          <button className="header__button header__button--blue" onClick={toProfile}>PROFILE</button>
          <button className="header__button  header__button--red" onClick={logout}>LOGOUT</button>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header__route-buttons">
          <button className="header__button" onClick={toHome}>HOME</button>
          <button className="header__button" onClick={toLastPage}>BACK</button>
        </div>
        <h2 className="header__logo" onClick={toHome}>GameRec</h2>
        <div className="header__profile-buttons">
          <button className="header__button header__button--blue" onClick={toLogin}>LOGIN</button>
        </div>
      </header>
    );
  }
}
