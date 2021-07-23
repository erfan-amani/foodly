import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onCloseCart }) => {
  return (
    <Modal onClose={onCloseCart}>
      <h2>Cart</h2>
      <div className={style['cart-list']}>
        <CartItem />
        <CartItem />
      </div>
      <div className={style.buttons}>
        <button className={style.close} onClick={onCloseCart}>
          close
        </button>
        <button className={style.checkout}>Checkout</button>
      </div>
    </Modal>
  );
};

export default Cart;
