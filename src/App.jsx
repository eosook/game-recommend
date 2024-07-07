import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import HeaderProfile from "./components/HeaderProfile/HeaderProfile";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <HeaderProfile user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<HomePage user={user} setUser={setUser}/>}></Route>
          <Route path="/recommendations" element={<RecommendationPage user={user} setUser={setUser}/>}></Route>
          <Route path="/description/:id" element={<DescriptionPage user={user} setUser={setUser}/>}></Route>
          <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}></Route>
          <Route path="/profile/:id" element={<ProfilePage user={user} setUser={setUser}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
