import style from './CartSummery.module.css';

const CartSummery = ({ onCloseCart }) => {
  return (
    <div className={style.summery}>
      <h2>Order Summery</h2>
      <div className={style.detail}>
        <div className={style.data}>
          <p>Total Price</p>
          <span>$59.4</span>
        </div>
        <div className={style.data}>
          <p>Shipping</p>
          <span>$4.4</span>
        </div>
      </div>
      <div className={style.buttons}>
        <button className={style['close-button']} onClick={onCloseCart}>
          close
        </button>
        <button className={style['checkout-button']}>Checkout</button>
      </div>
    </div>
  );
};

export default CartSummery;
