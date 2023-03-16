import React from 'react';
import SabMenu from './SabMenu';
import { Link } from "react-router-dom";


const Menu = () => {
  const nav = [
    {id: 1, name: 'О расстановках', href: 'about constelations'},
    {id: 2, name: 'формат работы', href: 'work format'},
    {id: 4, name: 'отзывы', href: 'reviews'},
  ]
	return (
		<nav>
    	<ul className="main-menu">
    		{nav.map(menu =>
      		<li key={menu.id}>
      			<Link to={menu.href}>{menu.name}</Link>
      		<SabMenu menu={menu.id} key={menu.id}/>
      		</li>
    		)}
    	</ul>
    </nav>
	)
}

export default Menu;