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
import { useState } from "react";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <HeaderProfile user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />}></Route>
          <Route
            path="/recommendations"
            element={<RecommendationPage user={user} />}
          ></Route>
          <Route
            path="/description/:id"
            element={<DescriptionPage user={user} />}
          ></Route>
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          ></Route>
          <Route path="/signup" element={<SignupPage user={user} />}></Route>
          <Route
            path="/profile/:id"
            element={<ProfilePage user={user} />}
          ></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
