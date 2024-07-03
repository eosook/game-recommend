import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/recommendations" element={<RecommendationPage />}></Route>
          <Route path="/description/:id" element={<DescriptionPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
