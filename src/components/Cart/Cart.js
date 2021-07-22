import Modal from '../UI/Modal';

const Cart = ({ onCloseCart }) => {
  return (
    <Modal onClose={onCloseCart}>
      <h2>Cart</h2>
      <button onClick={onCloseCart}>close</button>
    </Modal>
  );
};

export default Cart;
