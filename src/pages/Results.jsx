import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ContactModal from "../ui/Contact-Modal";
import NavModal from "../ui/Nav-Modal";

const Results = ({
  isContactModalOpen,
  isNavModalOpen,
  openContactModal,
  closeContactModal,
  openNavModal,
  closeNavModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const searchInputRef = useRef();
  const filterInputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  //const { homeSearch } = location.state;
  //console.log({ homeSearch })

  let filter = "";

  const enterSearch =
    '<h3 class="error__message too-many-results">Please enter something</h3>';

  const tooManyResults =
    '<h3 class="error__message too-many-results">Too many results, narrow your search please.</h3>';

  const movieNotFound =
    '<h3 class="error__message movie-not-found">Movie not found, try again.</h3>';

  useEffect(() => {});

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

    fetchMovies();
  }

  async function fetchMovies() {
    const movieSearch = searchInputRef.current.value;
    if (!movieSearch) return;

    setLoading(true);

    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=f54b9d83&s=${movieSearch}` +
        `${filter}`
    );

    await setMovies(data.Search || []);
    await setErrorMessage(data.Error);
    await setLoading(false);
    console.log(movies);
    console.log(errorMessage);
  }

  function rednerMovies(errorMessage, movies) {
    if (errorMessage) {
      return <h3 class="error__message">{errorMessage}</h3>;
    } else {
      return movies.map((movie) => (
        <div
          className="movie__wrapper"
          key={movie.Id}
          onClick={() => navigate(`${movie.imdbID}`)}
        >
          <div className="movie">
            <div className="movie__img--wrapper">
              <img src={movie.Poster} alt="" className="movie__img" />
            </div>
            <h3 className="movie__title">{movie.Title}</h3>
          </div>
        </div>
      ));
    }
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
                <li href="#">
                  <Link
                    className="nav__contact--white button__hover-effect"
                    onClick={openContactModal}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <Link
                className="nav__link--button nav__button--white"
                onClick={openNavModal}
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
                ref={searchInputRef}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    fetchMovies();
                  }
                }}
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
          {loading && (
            <div className="loading__bar--highlight loading__bar--highlight-right"></div>
          )}
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
          {loading && (
            <div className="loading__bar--highlight loading__bar--highlight-left"></div>
          )}
        </div>
      </section>
      <section id="movie__results">
        <div className="result__row">
          <div className="movie__list">
            {loading
              ? new Array(10).fill(0).map((_, index) => (
                  <div className="movie__wrapper" key={index}>
                    <div className="movie">
                      <div className="movie__img--wrapper">
                        <div className="movie__img--skeleton"></div>
                      </div>
                      <div className="movie__title--skeleton"></div>
                    </div>
                  </div>
                ))
              : rednerMovies(errorMessage, movies)}
          </div>
        </div>
      </section>
      <ContactModal
        isOpen={isContactModalOpen}
        closeModal={closeContactModal}
      />
      <NavModal
        isOpen={isNavModalOpen}
        closeNavModal={closeNavModal}
        openContactModal={openContactModal}
      />
    </>
  );
};

export default Results;
