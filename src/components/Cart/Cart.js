import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartForm from './CartForm';
import CartList from './CartList';

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal onClose={onCloseCart}>
      <div className={style['cart-container']}>
        <CartForm onCloseCart={onCloseCart} />
        <CartList />
      </div>
    </Modal>
  );
};

export default Cart;
