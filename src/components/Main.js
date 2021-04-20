import React, {useState, useEffect} from "react";
import Card from "./Card";
import api from "./../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

	const currentUser = React.useContext(CurrentUserContext);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getCards()
			.then(data => {
				setCards(data);
			})
			.catch((error) => console.log("Ошибка загрузки данных с сервера", error));
	}, []);

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
		});
	}

	function handleCardDelete(card) {
		// const isLiked = card.likes.some(i => i._id === currentUser._id);

		api.deleteCards(card._id).then(() => {
			setCards((state) => state.filter(item => item._id !== card._id));
		});
		// api.deleteCards(card._id).then((newCard) => {
		// 	setCards((state) = state.filter(item => item._id !== card._id)
		// })
			// setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
			// console.log(b)
		// });
	}

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-cover" onClick={props.onEditAvatar}>
					<img src={currentUser.avatar} alt="картинка - аватар пользователя" className="profile__avatar"/>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{currentUser.name}</h1>
					<button type="button"
							  aria-label="add"
							  className="profile__button-edit"
							  onClick={props.onEditProfile}>
					</button>
					<p className="profile__job">{currentUser.about}</p>
				</div>
				<button type="button"
						  aria-label="edit"
						  className="profile__button-add"
						  onClick={props.onAddPlace}></button>
			</section>

			<section className="elements">
				<ul className="elements__list">
					{cards.map((item) => (
						<Card card={item}
								onCardClick={props.onCardClick}
								onCardLike={handleCardLike}
								onCardDelete={handleCardDelete}
								key={item._id}/>
					))}
				</ul>
			</section>

		</main>
	)
}

export default Main;