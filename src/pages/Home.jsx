import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import HomeCinema from "../assets/undraw_home_cinema_l7yl.svg"

const Home = () => {
  return (
    <>
    <nav className="">
      <div className="nav__content-wrapper">
        <div className="logo nav__logo">
          <FontAwesomeIcon icon="video" className="fa-solid fa-video"/>
          MovArch
        </div>
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link link__hover-effect">
              Home
            </Link>
          </li>
          <li>
            <Link to="find_movies.html" className="nav__link link__hover-effect">
              Find Movies
            </Link>
          </li>
          <li href="#" onclick="toggleModal()">
            <Link to="#" className="nav__contact button__hover-effect">
              Contact
            </Link>
          </li>
        </ul>
        <Link href="#" className="nav__link--button" onclick="toggleNavModal()">
          <FontAwesomeIcon icon="bars" className="fa-solid fa-bars"/>
        </Link>
      </div>
    </nav>
    <div class="container">
      <header class="">
        <div class="header__content">
          <h1 class="header__title deep-blue">
            One place where you can find any film ever made.
          </h1>
          <h2 class="header__sub-title">
            Browse through our enormous archive at <span class="orange-red">MovArch</span>
          </h2>
          <div class="input__wrapper">
            <input id="home-search__input" class="search__input" type="text" placeholder="Find a good movie"></input>
            <button id="home-search__button" class="search__btn">
              <FontAwesomeIcon icon="magnifying-glass" className="home__search--icon fa-solid fa-magnifying-glass" />
            </button>
          </div>
          <div class="header__img--wrapper">
            <img class="header__img" src={HomeCinema} alt=""></img>
          </div>
        </div>
      </header>
    </div>
    </>
  )
}

export default Home