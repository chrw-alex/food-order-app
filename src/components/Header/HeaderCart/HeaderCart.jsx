import { ReactComponent as CartIcon } from '../../../assets/img/cart.svg'
import ItemsAmount from './ItemsAmount/ItemsAmount'

import style from './HeaderCart.module.css'
const HeaderCart = () => {
  return (
    <button className={style.btn}>
      <CartIcon className={style.icon} />
      <div className={style.text}>Корзина</div>
      <ItemsAmount />
    </button>
  )
}

export default HeaderCart