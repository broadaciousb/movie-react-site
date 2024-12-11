import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import HomeCinema from "../assets/undraw_home_cinema_l7yl.svg";
import ContactModal from "../ui/Contact-Modal.jsx";
import NavModal from "../ui/Nav-Modal.jsx";

const Home = ({ isContactModalOpen, isNavModalOpen, openContactModal, closeContactModal, openNavModal, closeNavModal }) => {

  const homeSearch = useRef();
  
  function onSearchKeyPress(key) {
    if (key === 'Enter') {
      
    }
  }

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
            <li href="#">
              <Link
                to="#"
                className="nav__contact button__hover-effect"
                onClick={openContactModal}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link href="#" className="nav__link--button" onClick={openNavModal}>
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
                ref={homeSearch}
              ></input>
              <Link
                to="/results"
                state={{homeSearch: `${homeSearch}`}}
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
      <ContactModal isOpen={isContactModalOpen} closeModal={closeContactModal} />
      <NavModal
        isOpen={isNavModalOpen}
        closeNavModal={closeNavModal}
        openContactModal={openContactModal}
      />
    </>
  );
};

export default Home;
