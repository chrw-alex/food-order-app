import style from './ItemsAmount.module.css'

const ItemsAmount = ({ cartItemsNumber }) => {
  return (
    <div className={style.amount}>{cartItemsNumber}</div>
  )
}

export default ItemsAmount