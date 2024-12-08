import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
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
      <Link href="#" className="modal__close-button" onClick="">
        <FontAwesomeIcon
          icon="times"
          className="fas fa-times"
        ></FontAwesomeIcon>
      </Link>
    </div>
  );
};

export default Modal;
