import {Link} from "react-router-dom";

export default function Contacts() {
    return (
        <div className='Contacts'>
            <div id='Contacts' className="level1">
                <div className='level2'>
                    <div className='level3'>
                        <h1>Свяжитесь с нами!</h1>
                    </div>
                    <div className='level3'>
                        <h3>Контактные телефоны:</h3>
                    </div>
                    <div className='level3_1'>
                        <div className="level4">
                            <h4>Руководитель программы</h4>
                            <p>Ласкова Татьяна Сергеевна</p>
                            <p><a href="tel:+79185856840">8 (918) 585 68 40</a></p>
                        </div>
                         <div className='level4'>
                            <h4>Методист программы</h4>
                            <p>Карпова Мария Александровна</p>
                            <p><a href="tel:+79198724243">8 (919) 872 42 43</a></p>
                        </div>
                    </div>
                    <div className='level3'>
                        <h3>E-mail:</h3>
                        <a href="mailto:tslaskova@sfedu.ru">
                            <p>tslaskova@sfedu.ru</p>
                        </a>
                    </div>
                    <div className='level3'>
                        <h3>Техническая поддержка:</h3>
                        <p>8:00-20:00 (MSK) Пн-Вс</p>
                        <a href="mailto:support@sfedu.ru">
                            <p>support@sfedu.ru</p>
                        </a>
                    </div>
                    <div className='button_cl'>
                        <Link to={'/form'}>
                            <p id="button_cl">Оставить заявку</p>
                        </Link>
                    </div>
                </div>
                <div className="level2">
                        <h3>Адрес:</h3>
                        <p>Экономический факультет, Южный федеральный университет, г. Ростов-на-Дону, ул. Горького, д. 88</p>
                        <br/>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3f44270ee11425aed9d007d3522997ca28e1e1a5ae98fb9e5040b0fe06803d3f&amp;source=constructor"
                    frameBorder='0'></iframe>
                </div>

            </div>
        </div>
    )
}