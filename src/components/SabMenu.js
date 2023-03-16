import React from 'react';
import { Link } from "react-router-dom";

const SabMenu = ({menu})=> {
	if (menu===1){
		const snav = [
		    {id: 1, name: 'Что такое расстановки', href: 'about constelations'},
		    {id: 2, name: 'С чем работают расстановки', href: 'about constelations#2'},
		    {id: 3, name: 'Результаты и опасность', href: 'about constelations#3'},
	    ]
		return (
			<ul className="sub-menu">
				{snav.map(menu =>
	        		<li key={menu.id}>
	        			<Link to={menu.href}>{menu.name}</Link>
	        		</li>
        		)}
			</ul>
		)
	}
}

export default SabMenu;