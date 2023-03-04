import React from 'react';

const Header = function () {
	return (
		<header className="App-header">
			<a href="index.html">
	        <img src="images/logo.jpg" alt="Логотип" class="Конь">
	        <h1>
	            Расстановочная лаборотория Светланы Казаковой
	        </h1>
	        </a>
	        <div class="cont1">
	            <img src="images/telegram.png" class="img">
	            <img src="images/whatsapp.png" class="img">
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