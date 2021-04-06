import React from "react";
import logoMesto from "../images/mesto_logo.svg";

function Header() {
	return (
		<header className="header page__header">
			<a href="#" target="_self" className="header__logo">
				<img src={logoMesto} alt="Логотип" className="header__img"/>
			</a>
		</header>
	)
}

export default Header;