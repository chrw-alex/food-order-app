import style from './Cart.module.css'
import CartItem from './CartItem/CartItem'
import Modal from '../UI/Modal/Modal'
import Order from './Order/Order'
import { useContext, useState } from 'react'
import CardContext from '../../store/cart-context'

const Cart = ({ setCartIsVisible }) => {

  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false)
  const [isDataSubmitting, setIsDataSubmitting] = useState(false)
  const [wasSendingDataSuccessfull, setWasSendingDataSuccessfull] = useState(false)

  const cartContext = useContext(CardContext)

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`
  const hasItems = cartContext.items.length > 0

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id)
  }

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsOrderFormVisible(true)
  }

  const submitHandler = async (userData) => {
    setIsDataSubmitting(true)

    await fetch('https://custom-hooks-35164-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedMeals: cartContext.items,
      })
    })
    setIsDataSubmitting(false)
    setWasSendingDataSuccessfull(true)
    cartContext.clearCart()
  }

  const cancelOrder = () => {
    setIsOrderFormVisible(false)
  }


  const cartModalContent = (
    <>
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
      {isOrderFormVisible && <Order onCancel={cancelOrder} onSubmit={submitHandler} />}
      {!isOrderFormVisible && <div className={style.actions}>
        <button className={style.buttonAlt} onClick={() => setCartIsVisible(false)}>Закрыть</button>
        {hasItems && <button className={style.button} onClick={orderHandler}>Заказать</button>}
      </div>}
    </>
  )

  const dataSubmittingCartModalContent = <p>Отправка данных заказа...</p>

  const dataWasSubmittedCartModalContent = (
    <>
      <p>Ваш заказ успешно отправлен!</p>
      <div className={style.actions}>
        <button className={style.buttonAlt} onClick={() => setCartIsVisible(false)}>
          Закрыть
        </button>
      </div>
    </>
  )

  return (
    <Modal setCartIsVisible={setCartIsVisible}>
      {!isDataSubmitting && !wasSendingDataSuccessfull && cartModalContent}
      {isDataSubmitting && dataSubmittingCartModalContent}
      {wasSendingDataSuccessfull && dataWasSubmittedCartModalContent}
    </Modal>
  )
}

export default Cart