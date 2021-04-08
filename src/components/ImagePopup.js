import React from "react";

function ImagePopup(props) {
	if (props.card) {
		return (
			<div className={props.card ? `popup-${props.name} popup popup_active` : `popup-${props.name} popup`}>
				<div className="zoom-img popup__form">
					<img src={props.card.link} className="zoom-img__img"
						  alt="Увеличенное изображение из карточки"/>
					<p className="zoom-img__text"></p>
					<button type="button"
							  className="zoom-img__close popup__close"
							  onClick={props.onClose}></button>
				</div>
			</div>
		)
	} else {
		return null;
	}

}

export default ImagePopup;


