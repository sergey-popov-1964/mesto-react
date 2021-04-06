import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import React from "react";

function App() {

	// const [isPopupClose, setPopupClose] = React.useState(false);
	const [isEditProfilePopupOpen, setPopupEditAсtive] = React.useState(false);
	const [isAddPlacePopupOpen, setPopupAddAсtive] = React.useState(false);
	const [isEditAvatarPopupOpen, setPopupAvatarAсtive] = React.useState(false);


	function handleEditProfileClick() {
		setPopupEditAсtive(!isEditProfilePopupOpen);
	}

	function handleEditAvatarClick() {
		setPopupAvatarAсtive(!isEditAvatarPopupOpen);
	}

	function handleAddPlaceClick() {
		setPopupAddAсtive(!isAddPlacePopupOpen);
	}

	function closeAllPopups() {
		// setPopupClose(!isPopupClose);
		setPopupEditAсtive(false);
		setPopupAvatarAсtive(false);
		setPopupAddAсtive(false);
	}

	return (
		<div className="root">
			<div className="page">
				<Header/>
				<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
						onEditAvatar={handleEditAvatarClick}/>
				<Footer/>

				<PopupWithForm isOpen={isEditProfilePopupOpen} name="form-edit" title="Редактировать профиль"
									onClosePopup={closeAllPopups}>
					<label className="form__label">
						<input type="text" id="input-name"
								 className="form__input form__input_type_first form__input_edit_name"
								 name="edit_name_avatar"
								 placeholder="Имя" minLength="2" maxLength="40" required/>
						<span className="form__error input-name-error"></span>
					</label>
					<label className="form__label">
						<input type="text" id="input-job" className="form__input form__input_type_last form__input_edit_job"
								 name="edit_job"
								 placeholder="Вид деятельности" minLength="2" maxLength="200" required/>
						<span className="form__error input-job-error"></span>
					</label>
				</PopupWithForm>

				<PopupWithForm isOpen={isAddPlacePopupOpen} name="form-add" title="Новое место"
									onClosePopup={closeAllPopups}>
					<label className="form__label">
						<input type="text" id="input-mesto"
								 className="form__input form__input_type_first form__input_add_name"
								 name="add_name_mesto"
								 placeholder="Название" minLength="2" maxLength="30" required/>
						<span className="form__error input-mesto-error"></span>
					</label>
					<label className="form__label">
						<input type="url" id="input-link" className="form__input form__input_type_last form__input_add_link"
								 name="add_name_link"
								 placeholder="Ссылка на картинку" required/>
						<span className="form__error input-link-error"></span>
					</label>
				</PopupWithForm>

				<PopupWithForm isOpen={isEditAvatarPopupOpen} name="form-avatar" title="Обновить аватар"
									onClosePopup={closeAllPopups}>
					<label className="form__label">
						<input type="url" id="input-avatar"
								 className="form__input form__input_type_last form__input_type_first form__input_avatar_link"
								 name="avatar_mesto"
								 placeholder="Введите адрес" minLength="2" maxLength="300" required/>
						<span className="form__error input-avatar-error"></span>
					</label>
				</PopupWithForm>
			</div>

			<div className="popup-delete popup">
				<form action="#" className="form popup__form" name="form__delete" noValidate>
					<h2 className="form__title">Вы уверены?</h2>
					<button type="submit" aria-label="submit" className="form__submit" name="form_submit">
						Да
					</button>
					<button type="button" aria-label="close" className="form__close popup__close" name="form_close"></button>
				</form>
			</div>

			<div className="popup-image popup">
				<div className="zoom-img popup__form">
					<img src="#" className="zoom-img__img" alt="Увеличенное изображение из карточки"/>
					<p className="zoom-img__text"></p>
					<button type="button" className="zoom-img__close popup__close"></button>
				</div>
			</div>

			<template className="element-mesto">
				<li className="element">
					<div className="element__img">
						<button type="button" className="element__trash"></button>
					</div>
					<div className="element__info">
						<p className="element__text"></p>
						<div className="element__likes">
							<button type="button" className="element__heart"></button>
							<span className="element__counter-like"></span>
						</div>
					</div>
				</li>
			</template>
		</div>

	);
}

export default App;
