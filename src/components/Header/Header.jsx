import HeaderCart from './HeaderCart/HeaderCart'
import sushi from '../../assets/img/sushi.jpg'
import style from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div>
            <p className={style.logo}>Япона Кухня</p>
          </div>
          <HeaderCart />
        </div>
      </header>
      <div className={style.mainImg}>
        <img src={sushi} alt='sushi' />
      </div>
    </>

  )
}

export default Header