//React
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//блоки
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import ProtectedRouteElement from "./ProtectedRoute";
//попапы
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup.jsx";
import InfoTooltip from "./InfoTooltip";
//прочее
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import popupUnionIconCheckMark from "../images/popupUnionIconCheckMark.svg";
import popupUnionIconTheCross from "../images/popupUnionIconTheCross.svg";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [infoTooltipRegisterPopupOpen, setInfoTooltipRegisterPopupOpen] =
    React.useState(false);
  const [infoTooltipLoginPopupOpen, setInfoTooltipLoginPopupOpen] =
    React.useState(false);
  const [cards, setCards] = React.useState([]);

  const isSomePopupOpen =
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    isEditAvatarPopupOpen ||
    selectedCard ||
    infoTooltipRegisterPopupOpen ||
    infoTooltipLoginPopupOpen;

  //открыть попапы
  function openPopupEdit() {
    setIsEditProfilePopupOpen(true);
  }
  function openPopupAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function openPopupEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  //infoTooltip
  function openInfoTooltipRegister() {
    setInfoTooltipRegisterPopupOpen(true);
    loggedIn = true;
  }
  function openInfoTooltipLogin() {
    setInfoTooltipLoginPopupOpen(true);
    loggedIn = true;
  }

  //закрытие на темный фон
  const handleOverlayClose = React.useCallback((event) => {
    if (event.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }, []);

  //закрытие на esc
  const handleCloseByEsc = React.useCallback((event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  }, []);

  //закрыть все попапы
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    setInfoTooltipRegisterPopupOpen(false);
    setInfoTooltipLoginPopupOpen(false);
  }

  //поставить лайк
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }

  //удалить карточку
  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные массива карточек
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cardList) => cardList.filter((c) => c._id !== card._id));
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }

  //вставить данные из формы
  function handleUpdateUser({ name, about }) {
    api
      .setUserInfo({ name, job: about })
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }

  //поменять картинку аватара
  function handleUpdateAvatar(avatar) {
    api
      .setUserAvatar(avatar)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }

  //добавить новую карточку
  function handleAddPlaceSubmit({ name, link }) {
    api
      .createNewCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }

  //закрытие попапа на темный фон и esc
  React.useEffect(() => {
    if (isSomePopupOpen) {
      document.addEventListener("keydown", handleCloseByEsc);
      document.addEventListener("click", handleOverlayClose);
      return () => {
        document.removeEventListener("keydown", handleCloseByEsc);
        document.removeEventListener("click", handleOverlayClose);
      };
    }
  }, [isSomePopupOpen]);

  //данные пользователя
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }, []);

  //вставляем карточки с сервера
  React.useEffect(() => {
    api
      .getAllCards() //Получить все карточки
      .then((cardList) => {
        setCards(cardList);
      })
      .catch((error) => {
        //если запрос не ушел
        console.log(error);
      });
  }, []);
  let loggedIn = true; ////////////////////////////////////////////////////МЕНЯЙ МЕНЯЙ МЕНЯЙ

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                loggedIn ? (
                  <Navigate to="/main" replace />
                ) : (
                  <Navigate to="/sign-in" replace />
                )
              }
            />
            {
              //<Header email="email" anotherPage="Выйти" pathPage="/main" />
            }
            <Route
              path="/main"
              element={
                <ProtectedRouteElement
                  element={
                    <>
                      <Main
                        cards={cards}
                        onEditProfile={openPopupEdit}
                        onAddPlace={openPopupAddPlace}
                        onEditAvatar={openPopupEditAvatar}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                      />
                      <Footer />
                      <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                      />
                      <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                      />
                      <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                      />
                      <PopupWithForm
                        name="card-delete"
                        title="Вы уверены?"
                        buttonText="Да"
                      ></PopupWithForm>
                      <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                      />
                    </>
                  }
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/sign-in"
              element={
                <>
                  <Header anotherPage="Регистрация" pathPage="/sign-up" />
                  <Login onInfoTooltip={openInfoTooltipLogin} />
                  <InfoTooltip
                    name="InfoTooltip-login"
                    popupUnionIcon={popupUnionIconTheCross}
                    text={"Что-то пошло не так! Попробуйте ещё раз."}
                    isOpen={infoTooltipLoginPopupOpen}
                    onClose={closeAllPopups}
                    //onUpdateUser={handleUpdateUser}
                  />
                </>
              }
            />
            <Route
              path="/sign-up"
              element={
                <>
                  <Header anotherPage="Войти" pathPage="/sign-in" />
                  <Register onInfoTooltip={openInfoTooltipRegister} />
                  <InfoTooltip
                    name="InfoTooltip-register"
                    popupUnionIcon={popupUnionIconCheckMark}
                    text={"Вы успешно зарегистрировались!"}
                    isOpen={infoTooltipRegisterPopupOpen}
                    onClose={closeAllPopups}
                    //onUpdateUser={handleUpdateUser}
                  />
                </>
              }
            />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}
