import React from 'react';
import Logo from '../images/logo.jpg';
import Telegram from '../images/telegram.png';
import Whatsapp from '../images/whatsapp.png';
import { Link } from "react-router-dom";

const Header = function () {
	return (
		<header className="App-header">
      		<Link to='/'>
		        <h1>
		            Расстановочная лаборотория Светланы Казаковой
		        </h1>
	        </Link>
	        <div className="contact">
	            <img src={Telegram} alt="telegram" className="img"/>
	            <img src={Whatsapp} alt="whatsapp" className="img"/>
	            <span>
	                : +7 905 664 66 08
	            </span>
	            <span>
	                svetlana@kazakovas.ru
	            </span>
	        </div>
		</header>
	)
}

export default Header;