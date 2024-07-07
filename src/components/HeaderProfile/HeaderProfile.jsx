import "./HeaderProfile.scss";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderProfile({ user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);

  const toProfile = () => {
    navigate(`/profile/${user}`);
  };

  const toLogin = () => {
    navigate(`/login`);
  };

  const logout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <>
        <button onClick={toProfile}>Profile</button>
        <button onClick={logout}>Logout</button>
      </>
    );
  } else {
    return <button onClick={toLogin}>Login</button>;
  }
}
