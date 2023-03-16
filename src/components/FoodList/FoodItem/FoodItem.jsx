import style from './FoodItem.module.css'
import ItemForm from './ItemForm/ItemForm'
import { useContext } from 'react'
import CardContext from '../../../store/cart-context'

const FoodItem = ({ id, name, description, price }) => {

  const cartContext = useContext(CardContext)

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      amount,
      price
    })
  }

  return (
    <li className={style.item}>
      <div>
        <div className={style.name}>{name}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{`$${price}`}</div>
      </div>
      <ItemForm onAddToCart={addToCartHandler} id={id} />
    </li>
  )
}

export default FoodItem