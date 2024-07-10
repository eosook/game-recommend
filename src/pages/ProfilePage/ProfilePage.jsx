import "./ProfilePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FutureGames from "../../components/FutureGames/FutureGames";
import PlayedGames from "../../components/PlayedGames/PlayedGames";

export default function ProfilePage({changeUser,  setUserPlayedList, setUserFutureList}) {
  const [user, setUser] = useState([]);
  const [refreshList, setRefreshList] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    const getProfile = async () => {
      const userData = await axios.get(`http://localhost:8080/profile/${id}`);
      setUser(userData.data[0]);
    };
    getProfile();
  }, []);
  return (
    <div className="profile">
      <h1 className="profile__header">Hello, {user.name}</h1>
      <div className="profile__lists-container">
        <div className="profile__played">
          <h2 className="profile__list-header">Games I've Played</h2>
          <div className="profile__played-list">
            <PlayedGames id={id} changeUser={changeUser} refreshList={refreshList} setRefreshList={setRefreshList} setUserPlayedList={setUserPlayedList} setUserFutureList={setUserFutureList}/>
          </div>
        </div>
        <div className="profile__future">
          <h2 className="profile__list-header">Future Gaming Wishlist</h2>
          <div className="future-list">
            <FutureGames id={id} changeUser={changeUser} refreshList={refreshList} setRefreshList={setRefreshList} setUserPlayedList={setUserPlayedList} setUserFutureList={setUserFutureList}/>
          </div>
        </div>
      </div>
    </div>
  );
}
