import React from "react";

function Card(props) {

	function handleClick() {
		props.onCardClick(props.card);
	}

	return (
		<li className="element">
			<div className="element__img" style={{backgroundImage: `url(${props.card.link})`}} onClick={handleClick}>
				<button type="button" className="element__trash"></button>
			</div>
			<div className="element__info">
				<p className="element__text">{props.card.name}</p>
				<div className="element__likes">
					<button type="button" className="element__heart"></button>
					<span
						className="element__counter-like">{props.card.likes.length > 0 ? props.card.likes.length : ''}</span>
				</div>
			</div>
		</li>
	);
}

export default Card;