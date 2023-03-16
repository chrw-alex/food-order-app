import { useRef, useState } from 'react'
import Input from '../../../UI/Input/Input'
import style from './ItemForm.module.css'

const ItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    const inputAmount = amountInputRef.current.value
    if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10) {
      setIsAmountValid(false)
      return
    }

    onAddToCart(+inputAmount)
  }

  return (
    <>
      <form className={style.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label='Количество'
          input={{
            id: id,
            type: 'number',
            min: '1',
            step: '1',
            defaultValue: '1'
          }} />
        <button>Добавить</button>
        {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
      </form>
    </>

  )
}

export default ItemForm