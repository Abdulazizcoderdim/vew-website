import './Section5.css'

const Section5 = () => {
    return (
        <div className='section5'>
            <div className="section5__container">
                <h1>С заботой о клиентах</h1>
                <div className="section5__text">
                    <div style={{width: "350px"}} className="section5__1">
                        <div className="section5-1-1">
                               <img width={"60px"} height={"60px"} src="../../../public/Task icon1.png" alt="" />
                               <h3>Сборные заказы (gifts case)</h3>
                               <p><span>•</span>Разработка для вас индивидуальных кейсов/подарочных наборов</p>
                        </div>

                        <div className="section5-1-2">
                                <img width={"60px"} height={"60px"} src="../../../public/Task icon2.png" alt="" />
                                <h3>При заказе от 50 000 рублей</h3> 
                                <p><span>•</span>10% от стоимости заказа в подарок!</p>
                                <p><span>•</span>Подарок из каталога на сумму 5000 рублей</p>
                        </div>
                    </div>
                    <div style={{width: "350px"}} className="section5__2">
                        <div className="section5__2-1">
                            <img width={"60px"} height={"60px"} src="../../../public/Task icon33.png" alt="" />
                            <h3>Персональный менеджер</h3>
                            <p><span>•</span>Обслуживание клиента с учетом его персональных предпочтений и требований</p>
                        </div>
                        <div className="section5__2-2">
                            <img width={"60px"} height={"60px"} src="../../assests/Task icon4.png" alt="" /> 
                            <h3>Чем больше заказов, тем больше скидки</h3>
                            <p><span>•</span>Предоставляем дополнительную скидку на заказ</p> 
                        </div>
                    </div>
                    <div style={{width: "244px"}} className="section5__3">
                         <div className="section5__3-1">
                            <img width={"60px"} height={"60px"} src="../../../public/Task icon 5.png" alt="" />
                            <h3>Индивидуальные заказы в Китае</h3>
                            <p><span>•</span>Поможем воплотить любую идею</p>
                            <p><span>•</span>Разработка макета</p>
                            <p><span>•</span>Быстро найдем фабрику</p>
                            <p><span>•</span>Согласуем образец</p>
                            <p><span>•</span>Доставим удобным вам способом</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section5;