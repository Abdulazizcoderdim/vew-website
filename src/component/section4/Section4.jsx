import './Section4.css'

const Section4 = () => {
    return (
        <div className='section4'>
            <div className="section4__container">
               <h1><span>Почему мы?</span> Всё под 1 крышей!</h1>    
               <div className="section4__text">
                 <div className="section4__text1">
                    <img width={"60px"} height={"60px"} src="../../../public/Task 5.png" alt="" />
                    <h3>Брендинг</h3>
                    <p><span>•</span>Тампопечать</p>
                    <p><span>•</span>Вышивка</p>
                    <p><span>•</span>Шелкография</p>
                    <p><span>•</span>Гравировка</p>
                    <p><span>•</span>Деколь</p>
                    <p><span>•</span>Термотрансфер</p>
                    <p><span>•</span>Уф печать</p>
                    <p><span>•</span>Сублимация</p>
                    <p><span>•</span>Цифровая печать</p>
                    <p><span>•</span>Прямая печать на ткани DTG</p>
                 </div>

                 <div className='section4__two'>
                    <div className="section4__two-1">
                        <img width={"60px"} height={"60px"} src="../../../public/Task 7'.png" alt="" />
                        <h3>Складирование</h3>
                        <p><span>•</span>Управление запасами</p>
                        <p><span>•</span>Сокращение складских затрат для наших клиентов</p>
                        <p><span>•</span>Управление складской инвентаризацией (ушло/пришло)</p>
                    </div> 
                    <div className="section4__two-2">
                         <img width={"60px"} height={"60px"} src="../../../public/Task icon 4.png" alt="" />
                         <h3>Логистика</h3>
                         <p><span>•</span>Фирменная упаковка</p>
                         <p><span>•</span>Бесплатная доставка</p>
                    </div> 
                 </div>

                 <img className='s4-ph' width={"295px"} height={"295px"} src="../../../public/TaskPa1.png" alt="" />
                 <img width={"280px"} height={"235px"} src="../../../public/TaskPag2.png" alt="" />

               </div>
            </div> 
        </div>
    );
};

export default Section4;