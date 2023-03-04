import React from 'react';

const Menu = function () {
	return (
        <nav>
        	<ul class="main-menu">
	            <li>
	                <a href="About the constellation.html">
	                    О расстановках
	                </a>
	                <ul class="sub-menu">
	                    <li>
	                        <a href="About the constellation.html">
	                            Что такое расстановки
	                        </a>
	                    </li>
	                    <li>
	                        <a href="About the constellation.html#2">
	                            С чем работают расстановки
	                        </a>
	                    </li>
	                    <li>
	                        <a href="About the constellation.html#3">
	                            Результаты и опасность
	                        </a>
	                    </li>
	                </ul>
	            </li>
	            <li>
	                <a href="Work format.html">
	                    формат работы
	                </a>
	            </li>
	            <li>
	                <a href="News.html">
	                    новости
	                </a>
	            </li>
	            <li>
	                <a href="Reviews.html">
	                    отзывы
	                </a>
	            </li>
	            <li>
	                <a href="about me.html">
	                    о себе
	                </a>
	            </li>
	        </ul>
        </nav>
	)
}

export default Menu;