import React from "react";

function Card({ card, onCardClick }) {

	function handleClick() {
		onCardClick(card);
	}

	return (
		<li className="element">
			<div className="element__img"
				  style={{backgroundImage: `url(${card.link})`}}
				  onClick={handleClick}>
				<button type="button" className="element__trash"></button>
			</div>
			<div className="element__info">
				<p className="element__text">{card.name}</p>
				<div className="element__likes">
					<button type="button" className="element__heart"></button>
					<span
						className="element__counter-like">{card.likes.length > 0 ? card.likes.length : ""}</span>
				</div>
			</div>
		</li>
	);
}

export default Card;