import { useContext, useState, useEffect } from 'react'
import CardContext from '../../../store/cart-context'
import { ReactComponent as CartIcon } from '../../../assets/img/cart.svg'
import ItemsAmount from './ItemsAmount/ItemsAmount'

import style from './HeaderCart.module.css'
const HeaderCart = ({ setCartIsVisible }) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false)
  const cartContext = useContext(CardContext)

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount
  }, 0)

  const buttonClasses = `${style.btn} ${isButtonAnimated ? style.bump : ""
    }`

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return
    }
    setIsButtonAnimated(true)

    const timer = setTimeout(() => {
      setIsButtonAnimated(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    };
  }, [cartContext.items])

  return (
    <button className={buttonClasses} onClick={() => setCartIsVisible(true)}>
      <CartIcon className={style.icon} />
      <div className={style.text}>Корзина</div>
      <ItemsAmount cartItemsNumber={cartItemsNumber} />
    </button>
  )
}

export default HeaderCart