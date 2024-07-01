import "./Screenshots.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Screenshots({ screenshot }) {
  const [screenshotUrl, setScreenshotUrl] = useState("");
  useEffect(() => {
    const getScreenshot = async () => {
      const screenshotData = await axios.post(
        `http://localhost:8080/games/screenshot/${screenshot}`
      );
      setScreenshotUrl(screenshotData.data[0].url.replace(/t_thumb/, "t_1080p"));
    };
    getScreenshot();
  }, []);
  return (
    <div className="screenshot">
      <img className="screenshot-image" src={screenshotUrl}></img>
    </div>
  );
}
