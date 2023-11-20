//Регистрация path="/sign-in"
import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

export default function Register() {
  return (
    <HomePage
      name="register"
      titleText="Регистрация"
      buttonText="Зарегистрироваться"
    >
      <Link className="popup__link-another-page" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </HomePage>
  );
}
