import React from 'react';
import { Link } from "react-router-dom";

const Acquaintance = function () {
	return (
		<div>
			<div className="s3">
            <div>
                <img className="main" src="images/constellator.jpg" alt="Светлана Казакова"/>
            </div>
            <p>
                Меня зовут Светлана Казакова, и я расстановщик. 
                На самом деле я еще учусь, но уже кое-что умею, непрерывно практиковала больше года, после чего счастливо ушла в декрет. Сейчас я работаю индивидуально по Skype (или аналоги), делаю, в основном, диагностические расстановки, терапевтические - по запросу.<br/>

                Диагностическая расстановка — это возможность посмотреть на любую (ну почти) ситуацию глубже, найти причину проблемы или направление, в котором следует «копать». 
                Можно посмотреть на ситуацию или отношения глазами другого человека, получить больше информации для осознанного выбора во многих ситуациях, от выбора места жительства или лечения до профессии и места работы. 
                Расстановка не даст точного ответа, но покажет ситуацию глубже, рельефнее и сделает многое понятнее. 
                Длится 30-40 минут (при заранее сформулированном запросе), стоит 500 рублей.<br/>

                О терапевтической расстановке — <Link to="about constelations">здесь</Link>. 
                Длится около часа, стоит 2000 рублей. 
                Записаться или задать вопросы можно в Телеграм или WhatsApp +79056646608.<br/>
            </p>
		</div>
        <div className="format">
            <a href="Format raboty.html">
               Формат работы
            </a>
        </div>
		<div className="s2">
  			<h4>
                Что такое расстановки и кому они нужны?
            </h4>
    		<p>
    			У нас есть сильные привычки, повторяющиеся события в жизни, странные чувства и всякие другие вещи, которых, как кажется нашей логической части, не должно было бы быть. Наше подсознание живет своей жизнью и не считает нужным следовать нашим логическим убеждениям. И у него есть на это свои причины. Эти причины можно постараться раскрыть и дать себе то, чего не хватало.
            </p>
            <p className="zapis">
                <br/>Расстановки — это такой почти волшебный метод работы с подсознанием. В нем заместители, обычные люди, которых вы впервые видите, могут почувствовать то, что чувствуете вы или ваши близкие, совсем вас не зная. В это можно не верить, а взять и проверить, прийдя на расстановки лично или по Skype.
    		</p>
            <div className="format1">
                <a href="Format raboty.html#4">
                    Как записаться
                </a>
            </div> 
            <p>
                <br/>Темы: личные отношения, семья, родители и дети, одиночество, работа, деньги, профессиональная реализация, здоровье, симптомы, психосоматика, чувства и состояния и т.д.
               <br/><br/>Лучше всего расстановки работают со странными ситуациями:
            </p>
		</div>
		<div>
			
			<ul className="preimuchistva">
				<li>
					<img src="images/1.jpg"/>
                    <h4>
                        Повторяющиеся истории <br/>(те-же-грабли): 
                    </h4>
					<p>
                        Мне все время попадаются мужчины, которые не хотят серьезных отношений; на каждой новой работе начальство придирается ко мне без видимых причин; каждый раз, когда отношения становятся серьезными, у меня вдруг пропадают все чувства к человеку — и т.д.
                    </p>
				</li>
				<li>
					<img src="images/2.jpg"/>
                    <h4>
                        Нелогичные реакции и чувства: 
                    </h4>
					<p>
                        Мы любим друг друга, но периодически я хочу сбежать, хотя у нас все хорошо; у нас были ужасные отношения, но меня по-прежнему тянет к нему (к ней); я люблю своего ребенка, но слишком сильно злюсь на него, а к младшей такого нет; у меня все есть, чтобы зарабатывать, но что-то останавливает — и т.д.
                    </p>
				</li>
				<li>
					<img src="images/3.jpg"/>
                    <h4>
                        Ситуации выбора: 
                    </h4>
					<p>
                        Старая профессия надоела, а для новой слишком много вариантов; в каком городе мне будет лучше жить; оставаться здесь или принять предложение о работе; жить в этой стране или имигрировать — и т.д.
                    </p>
				</li>
			</ul>
		</div>
		</div>
	)
}

export default Acquaintance;
