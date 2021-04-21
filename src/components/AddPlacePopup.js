import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

	const [name, setName] = useState('');
	const [link, setLink] = useState('');

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeLink(e) {
		setLink(e.target.value);
	}

	function handleClosePopup() {
		props.onClose()
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.onAddCard({name, link,});
	}

	return (
		<PopupWithForm isOpen={props.isOpen}
							onSubmit={handleSubmit}
							name="add"
							title="Новое место"
							buttonText="Создать"
							onClose={handleClosePopup}>
			<label className="form__label">
				<input type="text"
						 id="input-mesto"
						 onChange={handleChangeName}
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
						 onChange={handleChangeLink}
						 className="form__input form__input_type_last form__input_add_link"
						 name="add_name_link"
						 placeholder="Ссылка на картинку" required/>
				<span className="form__error input-link-error"></span>
			</label>
		</PopupWithForm>
	)
}

export default AddPlacePopup;


