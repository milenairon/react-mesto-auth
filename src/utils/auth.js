export const BASE_URL = "https://auth.nomoreparties.co";
/*function sendRequest() {
    return (
       
    )
}*/

//Зарегистрировать
export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.status === 400) {
        console.log("Некорректно заполнено одно из полей");
      } else {
        console.log(err);
      }
    });
};

//Войти в систему (Авторизизировать)
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .catch((err) => {
      if (err.status === 400) {
        console.log("Некорректно заполнено одно из полей");
      } else if (err.status === 401) {
        console.log("Пользователь с email не найден");
      } else {
        console.log(err);
      }
    });
};

//Проверить валидность токена
export const checkValidityToken = (email, password) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: "aeacf97e-5e0d-4830-af6d-c3921dcf63db",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.status === 400) {
        console.log("Токен не передан или передан не в том формате");
      } else if (err.status === 401) {
        console.log("Переданный токен некорректен");
      } else {
        console.log(err);
      }
    });
};
