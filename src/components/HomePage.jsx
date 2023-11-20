//path="/sign-in"
import React from "react";

export default function HomePage({ name, titleText, buttonText, children }) {
  return (
    <div className={`popup popup_place_${name}`}>
      <h2 className="popup__title popup__title_theme_dark popup__title_position_center">
        {titleText}
      </h2>
      <form
        name={name}
        className={`popup__form popup__form_type_${name}`}
        //onSubmit={onSubmit}
      >
        <label className="popup__field">
          <input
            className="popup__email popup__input popup__input_theme_dark"
            type="email"
            name="email"
            minLength="2"
            maxLength="40"
            placeholder="Email"
            required
            //value={email}
            //onChange={handleChangeEmail}
          />
          <span className="popup__input-error-message email-input-error-message"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__password popup__input popup__input_theme_dark"
            type="password"
            name="password"
            placeholder="Пароль"
            required
            //value={password}
            //onChange={handleChangePassword}
          />
          <span className="popup__input-error-message password-input-error-message"></span>
        </label>
        <button
          aria-label={buttonText}
          className="popup__button popup__button_theme_dark"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
      {children}
    </div>
  );
}
