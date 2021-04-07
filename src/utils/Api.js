class Api {
	constructor(baseUrl, config) {
		this._baseUrl = baseUrl;
		this._config = config;
	}

	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'GET',
			headers: this._config,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	getInitialUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'GET',
			headers: this._config,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	setUserInfo(data) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._config,
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	setUserAvatar(data) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._config,
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	addCard(data) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._config,
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	deleteCards(data) {
		return fetch(`${this._baseUrl}/cards/${data._id}`, {
			method: 'DELETE',
			headers: this._config,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	setCardLike(data) {
		return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
			method: 'PUT',
			headers: this._config,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	deleteCardLike(data) {
		return fetch(`${this._baseUrl}/cards/likes/${data._id}`, {
			method: 'DELETE',
			headers: this._config,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});

	}
}

const authorization = {authorization: 'be1a7eff-1608-42e4-ab79-a96e12a8c4b6', 'Content-Type': 'application/json'};
const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-21';
// const user_ID = '3e2a74326fac3d4d7e8ff79b';
const api = new Api(baseUrl, authorization);

export default api;