import logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Место. Россия" />
      <button
        aria-label="Регистрация" //{props.buttonText}
        className="header__button header__button_theme_dark"
        type="button"
      >
        Регистрация
      </button>
    </header>
  );
}
