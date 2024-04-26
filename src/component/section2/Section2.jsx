import './Section2.css'

function Section2() {
  return (
    <div className='section2'>
       <div className="section2__container">
         <div className="section2__imgs2">
             <div className='section__btns'>
               <button className='section2__btn'>корпоративные подарки</button>
                <h1>давайте займемся подарками!</h1>
                <div className='section__btn'>
                   <button>Подробнее</button>
                   <button>заказать</button>
                </div>
             </div>
             <div className="section__img22 section2__img222">
              <img height={"350px"} src="../../../public/secyion2-0.png" alt="" />  
             </div>
         </div> 

         <div className="section2__img-container">
            <div className="section2__img1">
              <img src="../../../public/section2-3.png" alt="" />
            </div>
            <div className="section2__img11">
              <img src="../../../public/section2-2.png" alt="" />
              <img src="../../../public/section2-1.png" alt="" />
            </div>
         </div>

       </div>
    </div>
  )
}

export default Section2
