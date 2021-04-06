import React from "react";
import imageProfile from "../images/avatar.jpg";

function Main(props) {
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar-cover" onClick={props.onEditAvatar}>
					<img src={imageProfile} alt="картинка - аватар пользователя" className="profile__avatar" />
				</div>
				<div className="profile__info">
					<h1 className="profile__name">Name User</h1>
						<button type="button" aria-label="add" className="profile__button-edit" onClick={props.onEditProfile}></button>
					<p className="profile__job">Description User</p>
				</div>
				<button type="button" aria-label="edit" className="profile__button-add" onClick={props.onAddPlace}></button>
			</section>
			<section className="elements">
				<ul className="elements__list">
				</ul>
			</section>
		</main>
	)
}

export default Main;