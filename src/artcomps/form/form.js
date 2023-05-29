import {Link} from "react-router-dom";

export default function Form() {
    return (
        <div id='Form'>
            <form>
                <div className='form'>
                    <div className="myForm">
                    <label htmlFor="customer_name">ФИО </label>
                    <input type="text" name="customer_name" id="customer_name" required=""/>
                        <label htmlFor="phone_number">Телефон </label>
                        <input type="tel" name="phone_number" id="phone_number" required=""/>
                            <label htmlFor="email_address">E-mail </label>
                            <input type="email" name="email_address" id="email_address" required=""/>
                    </div>

                    <div>
                        <input type="checkbox" name="extras" id="extras_baby" value="baby" required=""/>
                        Я ознакомлен(а) с <Link to='/policy'><u>Политикой конфиденциальности</u></Link> и даю согласие на обработку своих персональных данных
                    </div>

                    <div>
                        <button className='button_form'>
                            <p id="button_cl">Отправить заявку</p>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}