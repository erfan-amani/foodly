import style from './CartSummery.module.css';

const CartSummery = ({ onCloseCart, total, isEmpty }) => {
  const formattedTotal = `$${total.toFixed(2)}`;

  return (
    <div className={style.summery}>
      <h2>Order Summery</h2>
      <div className={style.detail}>
        <div className={style.data}>
          <p>Total Price</p>
          <span>{formattedTotal}</span>
        </div>
        <div className={style.data}>
          <p>Shipping</p>
          <span>$0.00</span>
        </div>
      </div>
      <div className={style.buttons}>
        <button
          className={`${style['close-button']} ${isEmpty ? style.orange : ''}`}
          onClick={onCloseCart}
        >
          close
        </button>
        {!isEmpty && (
          <button className={style['checkout-button']}>Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CartSummery;
