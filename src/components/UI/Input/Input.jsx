import React from 'react'
import style from './Input.module.css'

const Input = React.forwardRef(({ input, label }, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  )
})

export default Input