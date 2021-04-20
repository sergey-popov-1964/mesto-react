import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

	const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		api.getUserInfo()
			.then(data => {
				setCurrentUser(data);
			})
			.catch((error) => console.log("Ошибка загрузки данных с сервера", error));
	}, []);

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

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

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="root">
				<div className="page">
					<Header/>
					<Main onEditProfile={handleEditProfileClick}
							onAddPlace={handleAddPlaceClick}
							onEditAvatar={handleEditAvatarClick}
							onCardClick={handleCardClick}/>
					<Footer/>

					<PopupWithForm isOpen={isEditProfilePopupOpen}
										name="edit"
										title="Редактировать профиль"
										buttonText="Сохранить"
										onClose={closeAllPopups}>
						<label className="form__label">
							<input type="text"
									 id="input-name"
									 className="form__input form__input_type_first form__input_edit_name"
									 name="edit_name_avatar"
									 placeholder="Имя"
									 minLength="2"
									 maxLength="40" required/>
							<span className="form__error input-name-error"></span>
						</label>
						<label className="form__label">
							<input type="text"
									 id="input-job"
									 className="form__input form__input_type_last form__input_edit_job"
									 name="edit_job"
									 placeholder="Вид деятельности"
									 minLength="2"
									 maxLength="200" required/>
							<span className="form__error input-job-error"></span>
						</label>
					</PopupWithForm>

					<PopupWithForm isOpen={isAddPlacePopupOpen}
										name="add"
										title="Новое место"
										buttonText="Создать"
										onClose={closeAllPopups}>
						<label className="form__label">
							<input type="text"
									 id="input-mesto"
									 className="form__input form__input_type_first form__input_add_name"
									 name="add_name_mesto"
									 placeholder="Название"
									 minLength="2"
									 maxLength="30" required/>
							<span className="form__error input-mesto-error"></span>
						</label>
						<label className="form__label">
							<input type="url"
									 id="input-link"
									 className="form__input form__input_type_last form__input_add_link"
									 name="add_name_link"
									 placeholder="Ссылка на картинку" required/>
							<span className="form__error input-link-error"></span>
						</label>
					</PopupWithForm>

					<PopupWithForm isOpen={isEditAvatarPopupOpen}
										name="avatar"
										title="Обновить аватар"
										buttonText="Сохранить"
										onClose={closeAllPopups}>
						<label className="form__label">
							<input type="url"
									 id="input-avatar"
									 className="form__input form__input_type_last form__input_type_first form__input_avatar_link"
									 name="avatar_mesto"
									 placeholder="Введите адрес"
									 minLength="2"
									 maxLength="300" required/>
							<span className="form__error input-avatar-error"></span>
						</label>
					</PopupWithForm>

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
