import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__container">
               <div className="footer__33">
               <div className='footer__modal1'>
                  <p>По всем вопросам</p>
                 
                  <a href='#'>maldex<br />@info.com</a>
                 
                  <p className='f-md'>Основные категории</p>
                 
                  <span className='footer12 f-md'>Коллекции</span>
                  <span className='f-md'>Автомобильные аксессуары</span>
                  <span className='f-md'>Деловые подарки</span>
                  <span className='f-md'>Для дома</span>
                  <span className='f-md'>Для отдыха</span>
                  <span className='f-md'>Для путешествий</span>
                  <span className='footer__bo f-md'>Для спорта</span>
                  <span className='f-md'>Женские аксессуары</span>
                  <span className='f-md'>Зонты</span>
                  <span className='f-md'>Кухня и посуда</span>
                  <span className='f-md'>Личные</span>
                  <span className='f-md'>Мужские аксессуары</span>
                  <span className='f-md'>Одежда</span>
                  <span className='f-md'>Для офиса</span>
               </div>    
               <div className='footer__modal2'>
                  <span>Пишушие инструменты</span>
                  <span>Сумки</span>
                  <span>Вкусные подарки</span>
                  <span>Товары для детей</span>
                  <span>Упаковка</span>
                  <span>Электроника</span>
                  <span>Подарочные наборы</span>
               </div>    
               <div className='footer__modal3'>
                  <p>Бесплатный звонок из любой точки России</p>
                 
                  <a href='#'>8-800333-67-84</a>
                 
                  <p className='f-md'>разделы</p>

                  <span className='footer3 f-md'>Главная</span>
                  <span className='f-md'>О компании</span>
                  <span className='f-md'>Каталог</span>
                  <span className='f-md'>Доставка и оплата</span>
                  <span className='f-md'>Новости и статьи</span>
                  <span className='f-md'>Команда</span>
                  <span className='footer3__a f-md'>Наши дилеры</span>
                  
                  <span className='f-md'>Стать дилером</span>
                  <span className='f-md'>Контакты</span>
               </div>    
               <div className='footer__modal4'>
                  <p>Адрес</p>

                  <span>Мы в Москве:</span>
                  <span>Огородный проезд, д. 5,</span>
                  <span>стр. 2</span>
                  <span>Телефон: </span>
                  <span>+7 (499) 704-33-62</span>
                  
                  <span className='footer4'>Мы в Санкт-Петербурге</span>
                  <span>Московский пр., 10-12</span>
                  <span>Телефон: </span>
                  <span>+7 (812) 389-44-14</span>
               </div> 

               <div className="footer__modal5">
                   <p className='f-md'>Мы в сети</p>   

                   <span className='f-md'>Одежда</span>
                   <span className='f-md'>Ручки</span>
                   <span className='f-md'>Ежедневники и блокноты</span>
                   <span className='f-md'>Посуда</span>
               </div>  
             </div>

             <div className="footer__nav">
               <span>© 2023 Maldex. Все права защищены.</span>
               <div className='f_n'>
                  <button>Правила использования материалов</button>
                  <button>Политика конфиденциальности</button>
                  <button>Написать сообщение</button>
               </div>
             </div>
            </div> 
        </div>
    );
};

export default Footer;