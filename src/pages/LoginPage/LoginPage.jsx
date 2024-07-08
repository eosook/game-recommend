import "./LoginPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [successLogin, setSuccessLogin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfiles = async () => {
      const profileData = await axios.get("http://localhost:8080/profile");
      setProfiles(profileData.data);
    };
    getProfiles();
  }, []);

  const checkLogin = () => {
    profiles.forEach((profile) => {
      if (profile.user_name == username && profile.password == password) {
        setUser(profile.id);
        toHomePage();
      } else {
        setSuccessLogin(false);
      }
    });
  };

  const toHomePage = () => {
    navigate("/");
  };

  const toSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <h1 className="login__header">LOGIN</h1>
      <div className="login__form">
        <label className="login__label">Username:</label>
        <input
          type="text"
          className="login__input"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label className="login__label">Password:</label>
        <input
          type="text"
          className="login__input"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login__button" onClick={checkLogin}>
          Login
        </button>
        <button className="login__button" onClick={toSignup}>
          Signup
        </button>
      </div>
      <p className="login__error">
        {successLogin == false
          ? "You have entered a wrong username or password"
          : ""}
      </p>
    </div>
  );
}
