import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//F&F Id tt1905041

const Movie = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      if (!id) return;

      const movieData = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=f54b9d83`
      );

      setMovieInfo(movieData.data);
    }
    fetchMovie();
  }, []);

  console.log(movieInfo);

  return (
    <div className="selected-movie__contaier">
      <div className="selected-movie">
        <figure className="selected-movie__img--wrapper">
          <img src={movieInfo.Poster} alt="" className="selected-movie__img" />
        </figure>
        <div className="selected-movie__info">
          <h2 className="selected-movie__title">{movieInfo.Title}</h2>
          <h2 className="selected-movie__year movie-detail">
            Year Released - <span className="deep-blue">{movieInfo.Year}</span>
          </h2>
          <h2 className="selected-movie__genre movie-detail">
            Genre - <span className="deep-blue">{movieInfo.Genre}</span>
          </h2>
          <h2 className="selected-movie__director movie-detail">
            Director - <span className="deep-blue">{movieInfo.Director}</span>
          </h2>
          <h2 className="selected-movie__writers movie-detail">
            Writers - <span className="deep-blue">{movieInfo.Writer}</span>
          </h2>
          <h2 className="selected-movie__actors movie-detail">
            Starring - <span className="deep-blue">{movieInfo.Actors}</span>
          </h2>
          <div className="selected-movie__plot">
            <h2 className="selected-movie__actors movie-detail">Plot:</h2>
            <p className="selected-movie__para">{movieInfo.Plot}</p>
          </div>
        </div>
      </div>
      <Link to='/results'>
        <button className="selected-movie__back-btn">Back To Results</button>
      </Link>
    </div>
  );
};

export default Movie;
