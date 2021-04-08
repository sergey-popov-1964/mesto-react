import React, {useState, useEffect} from "react";
import Card from "./Card";
import api from "./../utils/Api";

function Main(props) {

	const [userName, setUserName] = useState("");
	const [userDescription, setUserDescription] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
	const [cards, setCards] = useState([]);

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getCards()])
			.then(data => {
				const [userInfo, cards] = data;
				setUserName(userInfo.name);
				setUserDescription(userInfo.about);
				setUserAvatar(userInfo.avatar);
				setCards(cards.reverse());
			})
			.catch(() => console.log("Ошибка загрузки данных с сервера"));
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-cover" onClick={props.onEditAvatar}>
					<img src={userAvatar} alt="картинка - аватар пользователя" className="profile__avatar"/>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<button type="button"
							  aria-label="add"
							  className="profile__button-edit"
							  onClick={props.onEditProfile}>
					</button>
					<p className="profile__job">{userDescription}</p>
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
								key={item._id}/>
					))}
				</ul>
			</section>

		</main>
	)
}

export default Main;