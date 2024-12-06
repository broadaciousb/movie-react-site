import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/fontawesome-svg-core';
import { Link } from "react-router-dom";
import axios from "axios";
import HomeCinema from "../assets/undraw_home_cinema_l7yl.svg";

const Home = () => {
  return (
    <>
      <nav className="">
        <div className="nav__content-wrapper">
          <div className="logo nav__logo">
            <FontAwesomeIcon icon="video" className="fa-solid fa-video" />
            MovArch
          </div>
          <ul className="nav__links">
            <li>
              <Link to="/" className="nav__link link__hover-effect">
                Home
              </Link>
            </li>
            <li>
              <Link to="/results" className="nav__link link__hover-effect">
                Find Movies
              </Link>
            </li>
            <li href="#" onClick="toggleModal()">
              <Link to="#" className="nav__contact button__hover-effect">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="nav__link--button"
            onClick="toggleNavModal()"
          >
            <FontAwesomeIcon icon="bars" className="fa-solid fa-bars" />
          </Link>
        </div>
      </nav>
      <div className="container">
        <header className="">
          <div className="header__content">
            <h1 className="header__title deep-blue">
              One place where you can find any film ever made.
            </h1>
            <h2 className="header__sub-title">
              Browse through our enormous archive at{" "}
              <span className="orange-red">MovArch</span>
            </h2>
            <div className="input__wrapper">
              <input
                id="home-search__input"
                className="search__input"
                type="text"
                placeholder="Find a good movie"
              ></input>
              <Link
                to="/find_movies.html"
                id="home-search__button"
                className="search__btn"
              >
                <FontAwesomeIcon
                  icon="magnifying-glass"
                  className="home__search--icon fa-solid fa-magnifying-glass"
                />
              </Link>
            </div>
            <div className="header__img--wrapper">
              <img className="header__img" src={HomeCinema} alt=""></img>
            </div>
          </div>
        </header>
      </div>
      <div id="modal" className="modal">
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
        <Link href="#" className="modal__close-button" onclick="toggleModal()">
          <FontAwesomeIcon icon="times" className="fas fa-times"></FontAwesomeIcon>
        </Link>
      </div>
    </>
  );
};

export default Home;
