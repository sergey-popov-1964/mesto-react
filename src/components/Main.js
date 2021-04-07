import React from "react";
import Card from "./Card";
import api from './../utils/Api';

function Main(props) {

	const [userName, gettUserName] = React.useState('');
	const [userDescription, gettUserDescription] = React.useState('');
	const [userAvatar, getUserAvatar] = React.useState('');
	const [cards, getCards] = React.useState([]);

	React.useEffect(() => {
		Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
			.then(data => {
				gettUserName(data[0].name);
				gettUserDescription(data[0].about);
				getUserAvatar(data[0].avatar);
				getCards(data[1].reverse());
			})
			.catch(() => console.log(`Ошибка загрузки данных с сервера`));
	}, []);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-cover" onClick={props.onEditAvatar}>
					<img src={userAvatar} alt="картинка - аватар пользователя" className="profile__avatar"/>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<button type="button" aria-label="add" className="profile__button-edit"
							  onClick={props.onEditProfile}></button>
					<p className="profile__job">{userDescription}</p>
				</div>
				<button type="button" aria-label="edit" className="profile__button-add" onClick={props.onAddPlace}></button>
			</section>

			<section className="elements">
				<ul className="elements__list">
					{cards.map((item, i) => (
						<Card card={item} onCardClick={props.onCardClick} key={item._id}/>
					))}
				</ul>
			</section>

		</main>
	)
}

export default Main;