import ReactDOM from 'react-dom'
import style from './Modal.module.css'

const Backdrop = ({ setCartIsVisible }) => {
  return (
    <div className={style.backdrop} onClick={() => setCartIsVisible(false)}></div>
  )
}

const ModalWindow = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  )
}

const portalEl = document.getElementById('overlay')

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setCartIsVisible={props.setCartIsVisible} />,
        portalEl
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalEl
      )}
    </>
  )
}

export default Modal