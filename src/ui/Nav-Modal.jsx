import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavModal = ({ isOpen, closeNavModal, openContactModal }) => {
  if (!isOpen) return null;
  

  return (
    <>
      <div className="nav__modal">
        <ul className="nav__modal--links">
          <li>
            <Link
              to="/"
              className="nav__link link__hover-effect"
              onClick={closeNavModal}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              className="nav__link link__hover-effect"
              onClick={closeNavModal}
            >
              Find Movies
            </Link>
          </li>
          <li href="#" onclick="toggleModal()">
            <Link
              href="#"
              className="nav__contact button__hover-effect"
              onClick={() => {
                closeNavModal();
                openContactModal();
              }}
            >
              Contact
            </Link>
          </li>
          <Link className="nav__modal--close" onClick={closeNavModal}>
            <FontAwesomeIcon icon="times" className="fas fa-times" />
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavModal;
