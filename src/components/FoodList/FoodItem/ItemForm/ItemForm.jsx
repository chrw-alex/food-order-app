import Input from '../../../UI/Input/Input'
import style from './ItemForm.module.css'

const ItemForm = ({ id }) => {
  return (
    <form className={style.form}>
      <Input label='Количество' input={{
        id: id,
        type: 'number',
        min: '1',
        step: '1',
        defaultValue: '1'
      }} />
      <button>Добавить</button>
    </form>
  )
}

export default ItemForm