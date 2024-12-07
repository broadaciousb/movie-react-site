import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";

const Results = () => {
  const [movies, setMovies] = useState([]);
  const searchInputRef = useRef();
  const filterInputRef = useRef();
  let filter = "";

  function filterMovies() {
    if (filterInputRef.current.value === "movie") {
      filter = `&type=movie`;
    } else if (filterInputRef.current.value === "series") {
      filter = `&type=series`;
    } else if (filterInputRef.current.value === "episode") {
      filter = `&type=episode`;
    } else {
      filter = ``;
    }
    console.log(filterInputRef.current.value);
    fetchMovies();
  }

  async function fetchMovies() {
    const movieSearch = searchInputRef.current.value;
    if (!movieSearch) return;

    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=f54b9d83&s=${movieSearch}` + `${filter}`
    );
    setMovies(data.Search || []);
  }

  return (
    <>
      <section id="search__page">
        <div className="search__header">
          <nav>
            <div className="nav__content-wrapper">
              <div className="logo nav__logo--white">
                <FontAwesomeIcon icon="video" className="fa-solid fa-video" />
                MovArch
              </div>
              <ul className="nav__links">
                <li>
                  <Link
                    to="/"
                    className="nav__link--white
                link__hover-effect 
                link__hover-effect--white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="nav__link--white
                link__hover-effect 
                link__hover-effect--white"
                  >
                    Find Movies
                  </Link>
                </li>
                <li href="#" onclick="toggleModal()">
                  <Link
                    to="#"
                    className="nav__contact--white button__hover-effect"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <Link
                to="#"
                className="nav__link--button nav__button--white"
                onclick="toggleNavModal()"
              >
                <FontAwesomeIcon icon="bars" className="fa-solid fa-bars" />
              </Link>
            </div>
          </nav>
          <div className="search__header--content">
            <h2 className="search__header--title">Explore our archive</h2>
            <div className="search__header-input--wrapper">
              <input
                id="search__input"
                className="search__header-input"
                type="text"
                placeholder="Search by title"
                data-search
                ref={searchInputRef}
              ></input>
              <div className="find__movies-search--icon">
                <Link
                  to=""
                  className="search__button"
                  id="search__button"
                  onClick={fetchMovies}
                >
                  <FontAwesomeIcon
                    icon="magnifying-glass"
                    className="fa-solid fa-magnifying-glass"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="header__background"></div>
        </div>
        <div className="loading__bar">
          <div className="loading__bar--highlight loading__bar--highlight-right loading__hidden"></div>
        </div>
        <div className="container search__container">
          <div className="filter__row">
            <h3 className="filter__title">Archive Results</h3>
            <div className="drop-down__wrapper">
              <label for="movie__filter" className="drop-down__caption">
                Filter Results
              </label>
              <select
                name="movies"
                id="movie_filter"
                className="movie__filter"
                onChange={filterMovies}
                ref={filterInputRef}
              >
                <option className="filter__option" value="all">
                  All
                </option>
                <option className="filter__option" value="movie">
                  Movie
                </option>
                <option className="filter__option" value="series">
                  Series
                </option>
                <option className="filter__option" value="episode">
                  Episode
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="loading__bar">
          <div className="loading__bar--highlight loading__bar--highlight-left loading__hidden"></div>
        </div>
      </section>
      <section id="movie__results">
        <div className="result__row">
          <div className="movie__list">
            {movies.map((movie) => (
              <div className="movie__wrapper">
                <div className="movie">
                  <div className="movie__img--wrapper">
                    <img src={movie.Poster} alt="" className="movie__img" />
                  </div>
                  <h3 className="movie__title">{movie.Title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="result__overlay--loading">
            <i className="fas fa-spinner"></i>
          </div>
        </div>
      </section>
      <div id="modal" className="modal display-none">
        <div className="modal__content">
          <h3 className="modal__title">
            Do you want your website to look like this one?
          </h3>
          <h2 className="modal__sub-title">Please let me know!</h2>
          <form className="modal__form" onsubmit="contact(event)">
            <div className="form-item">
              <label className="form-item__label">Name:</label>
              <input
                type="text"
                className="form__input"
                name="user_name"
                required
              ></input>
            </div>
            <div className="form-item">
              <label className="form-item__label">Email:</label>
              <input
                type="email"
                className="form__input"
                name="user_email"
                required
              ></input>
            </div>
            <div className="form-item">
              <label className="form-item__label">Message:</label>
              <textarea
                type="textarea"
                className="form__textarea"
                name="message"
                required
              ></textarea>
            </div>
            <button id="form__submit" className="form__submit">
              Send it
            </button>
          </form>
        </div>
        <a href="#" className="modal__close-button" onclick="toggleModal()">
          <i className="fas fa-times"></i>
        </a>
        <div className="modal__overlay display-none">
          <div className="modal__overlay--container">
            <h3 className="modal__overlay--caption">
              Thanks for reaching out! I will contact you soon.
            </h3>
          </div>
        </div>
      </div>
      <div className="nav__modal display-none">
        <ul className="nav__modal--links">
          <li onclick="toggleNavModal()">
            <a href="./index.html" className="nav__link link__hover-effect">
              Home
            </a>
          </li>
          <li onclick="toggleNavModal()">
            <a
              href="./find_movies.html"
              className="nav__link link__hover-effect"
            >
              Find Movies
            </a>
          </li>
          <li href="#" onclick="toggleModal()">
            <a
              href="#"
              className="nav__contact button__hover-effect"
              onclick="toggleNavModal()"
            >
              Contact
            </a>
          </li>
          <a href="#" className="nav__modal--close" onclick="toggleNavModal()">
            <i className="fas fa-times"></i>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Results;
