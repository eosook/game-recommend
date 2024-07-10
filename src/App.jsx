import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import HeaderProfile from "./components/HeaderProfile/HeaderProfile";
import { useState, useEffect } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [userPlayedList, setUserPlayedList] = useState([]);
  const [userFutureList, setUserFutureList] = useState([]);

  useEffect(() => {
    const getPlayedList = async () => {
      const listData = await axios.get(`http://localhost:8080/profile/played_games/${user}`);
      let list = [];
      setUserPlayedList([])
      listData.data.forEach((game) => {
        list.push(game.igdb_id);
      })
      setUserPlayedList(list)
    }
    const getFutureList = async () => {
      const listData = await axios.get(`http://localhost:8080/profile/future_games/${user}`);
      let list = [];
      setUserFutureList([])
      listData.data.forEach((game) => {
        list.push(game.igdb_id);
      })
      setUserFutureList(list)
    }
    if (user){
      getPlayedList();
      getFutureList();
    }
  }, [user])

  return (
    <>
      <BrowserRouter>
        <HeaderProfile user={user} setUser={setUser} />
        <main className="main__background">
          <Routes>
            <Route path="/" element={<HomePage user={user} />}></Route>
            <Route
              path="/recommendations"
              element={<RecommendationPage userPlayedList={userPlayedList} userFutureList={userFutureList}/>}
            ></Route>
            <Route
              path="/description/:id"
              element={<DescriptionPage user={user} userPlayedList={userPlayedList} userFutureList={userFutureList} setUserPlayedList={setUserPlayedList} setUserFutureList={setUserFutureList}/>}
            ></Route>
            <Route
              path="/login"
              element={<LoginPage user={user} setUser={setUser} />}
            ></Route>
            <Route path="/signup" element={<SignupPage user={user} />}></Route>
            <Route
              path="/profile/:id"
              element={<ProfilePage user={user} changeUser={setUser} setUserPlayedList={setUserPlayedList} setUserFutureList={setUserFutureList} />}
            ></Route>
            <Route path="/search" element={<SearchPage user={user} />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
