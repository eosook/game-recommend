import "./SignupPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [failedSignup, setFailedSignup] = useState(null);
  const [failedMessage, setFailedMessage] = useState("");
  const navigate = useNavigate();


  const signup = async () => {
    try {
      const signupData = await axios.post(`http://localhost:8080/profile`, {
        user_name: username,
        password: password,
        name: name,
      });
      setFailedMessage("Signup Successful");
      setTimeout(() => {
        navigate('/login', { state: { previousLocation: location.pathname }});
      }, 1500)
    } catch (error){
      setFailedSignup(true)
      setFailedMessage(error.response.data.message);
    }
  }

  return (
    <div className="login">
      <h1 className="login__header">SIGNUP</h1>
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
        <label className="login__label">Name:</label>
        <input
          type="text"
          className="login__input"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="login__button" onClick={signup}>
          Signup
        </button>
      </div>
      <p className={(failedMessage == "Signup Successful") ? "login__success" : "login__error"}>
        {failedMessage
          ? `${failedMessage}`
          : ""}
      </p>
    </div>
  );
}
