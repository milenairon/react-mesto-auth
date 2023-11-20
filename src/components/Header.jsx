import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header({ anotherPage, pathPage }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Место. Россия" />
      <Link className="header__link-another-page" to={pathPage}>
        {anotherPage}
      </Link>
    </header>
  );
}
