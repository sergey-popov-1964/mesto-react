import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

	const [currentUser, setCurrentUser] = useState("");

	const [cards, setCards] = useState([]);

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getCards()])
			.then(data => {
				const [userInfo, cards] = data;
				setCurrentUser(userInfo);
				setCards(cards);
			})
			.catch(() => console.log("Ошибка загрузки данных с сервера"));
	}, []);

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
		});
	}

	function handleCardDelete(card) {
		api.deleteCards(card._id).then(() => {
			setCards((state) => state.filter(item => item._id !== card._id));
		});
	}

	function handleCardClick(card, evt) {
		if (evt.target === evt.currentTarget) {
			setSelectedCard(card);
		}
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setSelectedCard(null);
	}

	function handleUpdateUser(data) {
		api.setUserInfo(data)
			.then(response => {
				setCurrentUser(response);
			})
			.catch((error) => console.log("Ошибка загрузки данных с сервера", error));
		closeAllPopups()
	}

	function handleUpdateAvatar(data) {
		api.setUserAvatar(data)
			.then(response => {
				setCurrentUser(response);
			})
			.catch((error) => console.log("Ошибка загрузки данных с сервера", error));
		closeAllPopups()
	}

	function handleAddPlaceSubmit(data) {
		api.addCard(data)
			.then(response => {
				setCards([response, ...cards]);
			})
			.catch((error) => console.log("Ошибка загрузки данных с сервера", error));
		closeAllPopups()
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="root">
				<div className="page">
					<Header/>
					<Main onEditProfile={handleEditProfileClick}
							onAddPlace={handleAddPlaceClick}
							onEditAvatar={handleEditAvatarClick}
							onCardClick={handleCardClick}
							cards={cards}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}/>
					<Footer/>

					<EditProfilePopup isOpen={isEditProfilePopupOpen}
											onClose={closeAllPopups}
											onUpdateUser={handleUpdateUser}/>

					<AddPlacePopup isOpen={isAddPlacePopupOpen}
											onClose={closeAllPopups}
										onAddCard={handleAddPlaceSubmit}/>

					<EditAvatarPopup isOpen={isEditAvatarPopupOpen}
										  onClose={closeAllPopups}
										  onUpdateAvatar={handleUpdateAvatar}/>

					<PopupWithForm name="delete"
										title="Вы уверены?"
										buttonText="Да"
										onClose={closeAllPopups}>
					</PopupWithForm>

					<ImagePopup card={selectedCard}
									onClose={closeAllPopups}/>
				</div>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
