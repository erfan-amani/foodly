import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import style from './Cart.module.css';
import CartSummery from './CartSummery';
import CartList from './CartList';

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);
  const isEmpty = cartCtx.items.length === 0;

  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  return (
    <Modal onClose={onCloseCart}>
      <div className={style['cart-container']}>
        <CartList
          items={cartCtx.items}
          addItemHandler={cartCtx.addItem}
          removeItemHandler={cartCtx.removeItem}
          isEmpty={isEmpty}
        />
        <CartSummery
          onCloseCart={onCloseCart}
          total={totalPrice}
          isEmpty={isEmpty}
        />
      </div>
    </Modal>
  );
};

export default Cart;
