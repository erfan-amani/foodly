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
        <CartForm
          items={cartCtx.items}
          clearCart={cartCtx.clearCart}
          onCloseCart={onCloseCart}
          total={cartCtx.totalAmount}
        />
        <CartList
          items={cartCtx.items}
          addItemHandler={cartCtx.addItem}
          removeItemHandler={cartCtx.removeItem}
          total={cartCtx.totalAmount}
        />
      </div>
    </Modal>
  );
};

export default Cart;
