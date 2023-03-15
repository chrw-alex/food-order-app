import style from './FoodItem.module.css'
import ItemForm from './ItemForm/ItemForm'

const FoodItem = ({ id, name, description, price }) => {
  return (
    <li className={style.item}>
      <div>
        <div className={style.name}>{name}</div>
        <div className={style.description}>{description}</div>
        <div className={style.price}>{`$${price}`}</div>
      </div>
      <ItemForm id={id} />
    </li>
  )
}

export default FoodItem