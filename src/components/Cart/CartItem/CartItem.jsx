import style from './CartItem.module.css'

const CartItem = ({ name, amount, price, onAdd, onRemove }) => {
  return (
    <li className={style.cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={style.summary}>
          <span className={style.price}>{`$${price}`}</span>
          <span className={style.amount}>x {amount}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem