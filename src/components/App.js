import '../App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";

function App() {

	const [isEditProfilePopupOpen, setPopupEditAсtive] = React.useState(false);
	const [isAddPlacePopupOpen, setPopupAddAсtive] = React.useState(false);
	const [isEditAvatarPopupOpen, setPopupAvatarAсtive] = React.useState(false);
	const [selectedCard, setCardClick ] = React.useState(false);


	function handleCardClick(card) {
		setCardClick(card);
	}

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
		setPopupEditAсtive(false);
		setPopupAvatarAсtive(false);
		setPopupAddAсtive(false);
		setCardClick(false);
	}

	return (
		<div className="root">
			<div className="page">
				<Header/>
				<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
						onEditAvatar={handleEditAvatarClick}  onCardClick={handleCardClick}/>
				<Footer/>

				<PopupWithForm isOpen={isEditProfilePopupOpen} name="edit" title="Редактировать профиль"
									buttonText="Сохранить"
									onClose={closeAllPopups}>
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

				<PopupWithForm isOpen={isAddPlacePopupOpen} name="add" title="Новое место" buttonText="Создать"
									onClose={closeAllPopups}>
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

				<PopupWithForm isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар"
									buttonText="Сохранить"
									onClose={closeAllPopups}>
					<label className="form__label">
						<input type="url" id="input-avatar"
								 className="form__input form__input_type_last form__input_type_first form__input_avatar_link"
								 name="avatar_mesto"
								 placeholder="Введите адрес" minLength="2" maxLength="300" required/>
						<span className="form__error input-avatar-error"></span>
					</label>
				</PopupWithForm>
			</div>

			<ImagePopup card={selectedCard} onClose={closeAllPopups}/>

			<div className="popup-delete popup">
				<form action="#" className="form popup__form" name="form__delete" noValidate>
					<h2 className="form__title">Вы уверены?</h2>
					<button type="submit" aria-label="submit" className="form__submit" name="form_submit">
						Да
					</button>
					<button type="button" aria-label="close" className="form__close popup__close" name="form_close"></button>
				</form>
			</div>
		</div>

	);
}

export default App;
