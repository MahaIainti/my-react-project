import React from 'react';

const SabMenu = ({menu})=> {
	if (menu===1){
		const snav = [
		    {id: 1, name: 'Что такое расстановки', href: 'About the constelations.html'},
		    {id: 2, name: 'С чем работают расстановки', href: 'About the constelations.html#2'},
		    {id: 3, name: 'Результаты и опасность', href: 'About the constelations.html#3'},
	    ]
		return (
			<ul className="sub-menu">
				{snav.map(menu =>
	        		<li key={menu.id}>
	        			<a href={menu.href} >
	        				{menu.name}
	        			</a>
	        		</li>
        		)}
			</ul>
		)
	}
}

export default SabMenu;