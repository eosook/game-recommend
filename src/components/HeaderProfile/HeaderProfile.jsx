import "./HeaderProfile.scss";
import { useNavigate, useLocation } from "react-router-dom";
import homeButton from "../../assets/images/Wood_circle_game_buttons.jpg";
import logo from "../../assets/images/up.png";

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
          <button className="header-button" onClick={toHome}>HOME</button>
        </div>
        <img className="header__logo" src={logo} />
        <div className="header__profile-buttons">
          <button className="header-button" onClick={toProfile}>PROFILE</button>
          <button className="header-button" onClick={logout}>LOGOUT</button>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header__route-buttons">
          <button className="header-button" onClick={toHome}>HOME</button>
        </div>
        <img className="header__logo" src={logo} />
        <div className="header__profile-buttons">
          <button className="header-button" onClick={toLogin}>LOGIN</button>
        </div>
      </header>
    );
  }
}
