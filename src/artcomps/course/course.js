export default function Course() {
    return (
        <div className='Course'>
            <div className='level2' id='level2_1'>
                <div className='level3_1'>
                    <h1>Что Вы изучите?</h1>
                </div>
                <div className='level3_1'>
                    <ul>
                        <li><p>Современные количественные методы в системном анализе</p></li>
                        <li><p>Математический инструментарий принятия решений</p></li>
                        <li><p>Методы и модели оценки эффективности</p></li>
                    </ul>
                </div>
            </div>
            <div className='level2' id='level2_2'>
                <div className='level3_1'>
                    <h1>Наши ведущие лекторы</h1>
                </div>
                <div className='level3_1'>
                    <div className="level4">
                        <div id='a1'></div>
                        <h3>Косолапова Наталья Алексеевна</h3>
                        <p>Декан экономического факультета ЮФУ, профессор, д. экон. н.</p>
                    </div>
                    <div className="level4">
                        <div id='a2'></div>
                        <h3>Крюков Сергей Владимирович</h3>
                        <p>Профессор кафедры экономической кибернетики, д. экон. н.</p>
                    </div>
                    <div className="level4">
                        <div id='a3'></div>
                        <h3>Лихацкая Екатерина Александровна</h3>
                        <p>Старший преподаватель кафедры экономической кибернетики</p>
                    </div>
                </div>
            </div>
        </div>
    )
}