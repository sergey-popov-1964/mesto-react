import React from "react";

function PopupWithForm(props) {
	console.log(props)
		return (
			<div className={props.isOpen  ? 'popupWithForm popup popup_active' : 'popupWithForm popup'}>
			<form action="#" className="form popup__form" name={props.name} noValidate>
				<h2 className="form__title">{props.title}</h2>
				{props.children}
				<button type="submit" aria-label="submit" className="form__submit" name="form_submit">
					Сохранить
				</button>
				<button type="button" aria-label="close" className="form__close popup__close" name="form_close" onClick={props.onClosePopup}></button>
			</form>
		</div>
	)
}

export default PopupWithForm;