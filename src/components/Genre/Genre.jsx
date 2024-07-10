import "./Genre.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Genre({ genreId, index }) {
  const [genre, setGenre] = useState([]);
  const [color, setColor] = useState("");
  // api call to get the name of the genres off of the genre ids
  useEffect(() => {
    const getGenre = async () => {
      const genreData = await axios.post(
        `http://localhost:8080/games/genre/${genreId}`
      );
      setGenre(genreData.data[0].name);
    };
    getGenre();

    if (index == 0) {
      setColor("genre-color__one");
    } else if (index == 1) {
      setColor("genre-color__two");
    } else if (index == 2) {
      setColor("genre-color__three");
    } else if (index == 3) {
      setColor("genre-color__four");
    } else {
      setColor("genre-color__five");
    }
  }, []);

  return <div className={`genre ${color}`}>{genre}</div>;
}
