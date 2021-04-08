class Api {
	constructor(baseUrl, baseHeaders) {
		this._baseUrl = baseUrl;
		this.baseHeaders = baseHeaders;
	}

	getCards() {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'GET',
			headers: this.baseHeaders,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'GET',
			headers: this.baseHeaders,
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
			headers: this.baseHeaders,
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
			headers: this.baseHeaders,
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
			headers: this.baseHeaders,
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
			headers: this.baseHeaders,
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
			headers: this.baseHeaders,
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
			headers: this.baseHeaders,
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			});

	}
}

const baseHeaders = {authorization: 'be1a7eff-1608-42e4-ab79-a96e12a8c4b6', 'Content-Type': 'application/json'};
const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-21';
const api = new Api(baseUrl, baseHeaders);

export default api;