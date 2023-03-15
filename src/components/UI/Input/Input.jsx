import style from './Input.module.css'

const Input = ({ input, label }) => {
  return (
    <div className={style.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  )
}

export default Input