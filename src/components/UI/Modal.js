import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const BackDrop = ({ onClick }) => {
  return <div onClick={onClick} className={style.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const overlayContainer = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClose} />,
        overlayContainer
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayContainer
      )}
    </>
  );
};

export default Modal;
