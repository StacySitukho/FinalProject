import {Link} from "react-router-dom";

export default function Key() {
    return (
        <div id='Key' className="level1">
           <div className='level2'>
                <h1 id="h1_1">Цифровые инструменты бизнес-аналитики</h1>
                <h2 id="h2_1">Курс для тех, кто хочет иметь востребованную профессию!</h2>
               <br/>
               <br/>
               <br/>
               <p id="p1">Старт с 15 июля!</p>
                <div className='button_cl'>
                    <Link to={'/form'}>
                        <p id="button_cl">Оставить заявку</p>
                    </Link>
                </div>
            </div>
            <div id='img_pic1' className="level2"></div>
        </div>
    )
}