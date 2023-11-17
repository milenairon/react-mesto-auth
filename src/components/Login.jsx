//path="/sign-in"
import React from "react";

export default function Login() {
  return (
    <div className='popup popup_place_login'>
      <h2 className="popup__title popup__title_theme_dark popup__title_position_center">
        Вход
      </h2>
      <form
        //name={props.name}
        className={`popup__form popup__form_type_login`}
        //onSubmit={props.onSubmit}
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
            //value={name}
            //onChange={handleChangeName}
          />
          <span className="popup__input-error-message forename-input-error-message"></span>
        </label>
        <label className="popup__field">
          <input
            className="popup__password popup__input popup__input_theme_dark"
            type="password"
            name="password"
            minLength="2"
            maxLength="200"
            placeholder="Пароль"
            required
            //value={description}
            //onChange={handleChangeDescription}
          />
          <span className="popup__input-error-message job-input-error-message"></span>
        </label>
        <button
          aria-label="Войти" //{props.buttonText}
          className="popup__button popup__button_theme_dark"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
/*
(
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__forename popup__input"
          type="text"
          name="forename"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          required
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error-message forename-input-error-message"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__job popup__input"
          type="text"
          name="job"
          minLength="2"
          maxLength="200"
          placeholder="О себе"
          required
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="popup__input-error-message job-input-error-message"></span>
      </label>
    </PopupWithForm>
  ); */
