//path="/sign-in"
import HomePage from "./HomePage";
import api from "../utils/Api";

export default function Login({ onInfoTooltip }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //const { email, password } = formValue;
    //api.register(username, password, email);
  }
  return (
    <HomePage
      name="login"
      titleText="Вход"
      buttonText="Войти"
      onInfoTooltip={onInfoTooltip}
      onSubmit={handleSubmit}
    />
  );
}
