import './Sidebar.css'
import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__container">
        <a href="#"><img width={"170px"} height={"30px"} src="../../../public/TaskLogo.png" alt="" /></a>
        <span className='sidebar__icon-phone'><CiPhone /></span>
        <p className='sidebar__phone-number'>3-323-234-1221</p>
        <span className="sidebar__icon-email"><MdOutlineMail /></span>
        <p className='sidebar__email'>info@gmail.com</p>
        <span className='sidebar__location-icon'><IoLocationOutline /></span>
        <p className='sidebar__location'>Москва</p>
        <p className='sidebar__text'>Минимальная сумма заказа от 30 тыс рублей</p>
        <a href='#' className='sidebar__page'>Доставка</a>
        <a href='#' className='sidebar__page'>Оплата</a>
        <a href='#' className='sidebar__page'>Контакты</a>
        <a href='#' className='sidebar__heart-icon'><CiHeart /></a>
        <div className='sidebar__end'>
           <span className='sidebar__end-first'>3</span>
           <span className='sidebar__end-second'>14 619,00 ₽</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
