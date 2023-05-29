import './header.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className='Header'>
            <Link to={'/'}>
                <div id='img0'></div>
            </Link>
            <Link to='/'>
                <p>Главная</p>
            </Link>
            <Link to='/course'>
                <p>О курсе</p>
            </Link>
            <Link to='/benefits'>
                <p>Преимущества</p>
            </Link>
            <Link to='/contacts'>
                <p>Контакты</p>
            </Link>
        </div>
    )
}

