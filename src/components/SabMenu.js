import React from 'react';
import { Link } from "react-router-dom";

const SabMenu = ({menu})=> {
	if (menu===1){
		const snav = [
		    {id: 1, name: 'Что такое расстановки', href: '#What-are-constelations'},
		    {id: 2, name: 'С чем работают расстановки', href: '#What-do-constelations-work-with'},
		    {id: 3, name: 'Результаты и опасность', href: '#Results-and-danger'},
	    ]
		return (
			<ul className="sub-menu">
				{snav.map(menu =>
	        		<li key={menu.id}>
	        			<a href={menu.href}>{menu.name}</a>
	        		</li>
        		)}
			</ul>
		)
	}
}

export default SabMenu;