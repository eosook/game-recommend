import "./Genre.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Genre({ genreId }) {
    const [genre, setGenre] = useState([]);
  // api call to get the name of the genres off of the genre ids
  useEffect(() => {
    const getGenre = async () => {
      const genreData = await axios.post(
        `http://localhost:8080/games/genre/${genreId}`
      );
      setGenre(genreData.data[0].name);
    };
    getGenre();
  }, []);

  return <div>{genre}</div>;
}
