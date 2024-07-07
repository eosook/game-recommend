import "./SignupPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [successSignup, setSignup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfiles = async () => {
      const profileData = await axios.get("http://localhost:8080/profile");
      setProfiles(profileData.data);
    };
    getProfiles();
  }, []);

  return (
    <div className="login">
      <h1>Sign Up</h1>
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
        <label className="login__label">First Name:</label>
        <input
          type="text"
          className="login__input"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login__button" >
          Signup
        </button>
      </div>
      <p className="login__error">
        {successSignup == false
          ? "You have entered a wrong username or password"
          : ""}
      </p>
    </div>
  );
}
