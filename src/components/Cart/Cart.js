import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartSummery from './CartSummery';
import CartList from './CartList';

const Cart = ({ onCloseCart }) => {
  return (
    <Modal onClose={onCloseCart}>
      <div className={style['cart-container']}>
        <CartList />
        <CartSummery onCloseCart={onCloseCart} />
      </div>
    </Modal>
  );
};

export default Cart;
