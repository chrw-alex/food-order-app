import style from './Cart.module.css'
import CartItem from './CartItem/CartItem'
import Modal from '../UI/Modal/Modal'
import { useContext } from 'react'
import CardContext from '../../store/cart-context'

const Cart = ({ setCartIsVisible }) => {

  const cartContext = useContext(CardContext)

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`
  const hasItems = cartContext.items.length > 0

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id)
  }

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  return (
    <Modal setCartIsVisible={setCartIsVisible}>
      <ul className={style.list}>
        {cartContext.items.map((item) => {
          return (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={addCartItemHandler.bind(null, item)} onRemove={removeCartItemHandler.bind(null, item.id)} />
          )

        })}
      </ul>
      <div className={style.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style.buttonAlt} onClick={() => setCartIsVisible(false)}>Закрыть</button>
        {hasItems && <button className={style.button}>Заказать</button>}
      </div>
    </Modal>
  )
}

export default Cart