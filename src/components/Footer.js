import React from 'react';
import Telegram from '../images/telegram.png';
import Whatsapp from '../images/whatsapp.png';
import Vk from '../images/vk.png';
import Facebook from '../images/facebook.png';

const Footer = function () {
	return (
		<footer>
            <div>
        	   <span>2016 © Александр Казаков programming</span>
            </div>
            <div className="cont2">
                <img src={Telegram} alt="telegram" className="img"/>
                <img src={Whatsapp} alt="whatsapp" className="img"/>
                <div>
                    <span>
                        : +7 905 664 66 08
                    </span>
                    <span>
                        svetlana@kazakovas.ru
                    </span>
                </div>
                <div>
                    <a href="https://vk.com/constellations_kazakova" target="blank">
                        <img src={Vk} alt="vk" className="img"/>
                    </a>
                    <a href="https://www.facebook.com/vetkas?pnref=lhc" target="blank">
                        <img src={Facebook} alt="fb" className="img"/>
                    </a>
                </div>
            </div>
      	</footer>
	)
}

export default Footer;