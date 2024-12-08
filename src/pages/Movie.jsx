import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movieId, setMovieId] = useState([]);
  const [movieInfo, setMovieInfo] = useState([]);

  async function fetchMovie() {
    const movieId = "tt1905041";
    if (!movieId) return;

    const movieData = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=f54b9d83`
    );

    setMovieInfo(movieData.data)

    console.log(movieInfo)
  }

  fetchMovie();


  return (
    <>
      <h2>{movieInfo.Title}</h2>
    </>
  )
}


export default Movie