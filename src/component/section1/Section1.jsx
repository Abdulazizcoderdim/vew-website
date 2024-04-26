import './Section1.css'

function Section1() {
  return (
    <div className='section'>
       <div className="section__container">
         <div className='section__imgs1'>
            <div className="section__img1">
              <img src="../../../public/section1-2.png" alt="" />    
            </div>  
            <div className="section__img2">
                <img src="../../../public/section1-1.png" alt="" />
                <img src="../../../public/section1-1.png" alt="" />
            </div>
         </div>
         <div className="section__imgs2">
             <div className='section__btns'>
                <h1>скачать презентацию</h1>
                <div className='section__btn'>
                   <button>заказать</button>
                   <button>скачать</button>
                </div>
             </div>
             <div className="section__img22">
                <img src="../../../public/section1-3.png" alt="" />  
             </div>
         </div> 
       </div>
    </div>
  )
}

export default Section1
