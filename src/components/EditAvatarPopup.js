import React, {useRef, useState} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

	const [avatar, setAvatar] = useState('');

	const avatarRef = useRef(0);


	function handleClosePopup() {
		props.onClose()
	}

	function handleChangeAvatar(e) {
		setAvatar(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onUpdateAvatar({avatar: avatar});
	}

	return (
		<PopupWithForm isOpen={props.isOpen}
							name="avatar"
							title="Обновить аватар"
							buttonText="Сохранить"
							onClose={handleClosePopup}
							onSubmit={handleSubmit}>
			<label className="form__label">
				<input type="url"
						 id="input-avatar"
						 ref={avatarRef}
						 onChange={handleChangeAvatar}
						 className="form__input form__input_type_last form__input_type_first form__input_avatar_link"
						 name="avatar_mesto"
						 placeholder="Введите адрес"
						 minLength="2"
						 maxLength="300" required/>
				<span className="form__error input-avatar-error"></span>
			</label>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;


