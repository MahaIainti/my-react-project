import React from 'react';
import SabMenu from './SabMenu';


const Menu = ({nav}) => {
	return (
		<nav>
        	<ul className="main-menu">
        		{nav.map(menu =>
	        		<li key={menu.id}>
	        			<a href={menu.href} >
	        				{menu.name}
	        			</a>
	        		<SabMenu menu={menu.id} key={menu.id}/>
	        		</li>
        		)}
        	</ul>
        </nav>
	)
}

export default Menu;