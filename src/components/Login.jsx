//path="/sign-in"
import HomePage from "./HomePage";

export default function Login({
  onSubmit,
  handleChangeInput,
  email,
  password,
}) {
  return (
    <HomePage
      name="login"
      titleText="Вход"
      buttonText="Войти"
      onSubmit={onSubmit}
      handleChangeInput={handleChangeInput}
      email={email}
      password={password}
    />
  );
}
