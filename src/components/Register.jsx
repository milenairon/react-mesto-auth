//Регистрация path="/sign-in"
import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import api from "../utils/Api";

export default function Register({ onInfoTooltip }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //const { email, password } = formValue;
    //api.register(username, password, email);
  };
  return (
    <HomePage
      name="register"
      titleText="Регистрация"
      buttonText="Зарегистрироваться"
      onInfoTooltip={onInfoTooltip}
      onSubmit={handleSubmit}
    >
      <Link className="popup__link-another-page" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </HomePage>
  );
}
