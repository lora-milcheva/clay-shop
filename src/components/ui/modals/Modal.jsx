import ReactDOM from "react-dom"
import ModalBackdrop from "./ModalBackdrop";

const Modal = (props) => {
    const { element } = props

    return (
        <div className='modal'>
            {ReactDOM.createPortal(<ModalBackdrop onConfirm={() => {
                }}/>,
                document.getElementById('backdrop-root'))}

            {ReactDOM.createPortal({ element },
                document.getElementById('overlay-root'))}
        </div>
    )
}

export default Modal