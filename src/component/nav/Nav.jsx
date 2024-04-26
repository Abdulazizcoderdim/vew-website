import './Nav.css'
import { IoMdMenu } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

function Nav() {
  return (
    <div className='nav'>
      <div className="nav__container">
         <div className='nav__katalog'>
           <span className='nav__catalog-icon'><IoMdMenu /></span>
           <p className='nav__catalog-text'>Каталог</p>
         </div>   
         <div className='nav__second-icon'>
           <HiMenuAlt3 /> 
         </div>
         <div className="nav__input">
            <input type="text" placeholder='Поиск (Например: термокружка)'/>
            <span className='nav__search-logo'><CiSearch /></span>
         </div>
         <a href="#" className='nav__new'>new</a>
         <span className='nav__num1'>243</span>
         <a href="#" className='nav__hits'>hits</a>
         <span className='nav__num2'>237</span>
      </div> 
    </div>
  )
}

export default Nav
