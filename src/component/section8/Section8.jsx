import './Section8.css'

const Section8 = () => {
    return (
        <div className='s8'>
            <div className="s8__container">
               <div className='s8__modals'>
                  <div className="s8__modal">
                    <h1>Сувенирная продукция</h1>
                    <p>Каталог «от ручки до ракеты» «от промо до VIP» 
                    Более <span className="s8__text">1 000 000</span> бизнес сувениров со всего мира</p>
                    <img width={"550px"} height={"307px"} src="../../../public/s8-photo.png" alt="" />
                  </div>
                  <div className="s9__modal2">
                    <img width={"820px"} height={"479px"} src="../../../public/s8-photo2.png" alt="" />
                  </div>
               </div>

               <div className="s8__modals">
                <img src="../../../public/s8__photo3.png" alt="" />
                <img src="../../../public/s8__photo4.png" alt="" />
               </div>
                

            </div>
        </div>
    );
};

export default Section8;