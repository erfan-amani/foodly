import { useContext } from 'react';
import style from './CartForm.module.css';
import CartContext from '../../store/cart-context';
import useRequest from '../../hooks/use-request';
import useInput from '../../hooks/use-input';

const CartForm = ({ onCloseCart }) => {
  const { items, totalAmount, clearCart } = useContext(CartContext);

  const { sendRequest, isLoading: isSubmithing, error } = useRequest();

  const formattedTotal = `$${totalAmount.toFixed(2)}`;
  const isEmpty = items.length === 0;

  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    onChange: nameChangeHandler,
    onBlur: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');
  const {
    value: address,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    onChange: addressChangeHandler,
    onBlur: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== '');
  const {
    value: postCode,
    valueIsValid: postCodeIsValid,
    hasError: postCodeHasError,
    onChange: postCodeChangeHandler,
    onBlur: postCodeBlurHandler,
    reset: resetPostCode,
  } = useInput((value) => value.trim() !== '');

  const formIsValid =
    nameIsValid && addressIsValid && postCodeIsValid && !isEmpty;

  const submissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    sendOrder();
    resetName();
    resetAddress();
    resetPostCode();
  };

  const applyData = (data) => {
    clearCart();
    console.log('order ID:' + data.name);
  };

  const sendOrder = () => {
    const deliveryData = {
      name,
      address,
      postCode,
    };

    sendRequest(
      {
        url: 'https://foodly-api-default-rtdb.firebaseio.com/orders.json',
        method: 'POST',
        body: { items, deliveryData },
        header: { 'Content-type': 'application/json' },
      },
      applyData
    );
  };

  const nameInputClasses = nameHasError
    ? `${style['form-control']} ${style.invalid}`
    : `${style['form-control']}`;
  const addressInputClasses = addressHasError
    ? `${style['form-control']} ${style.invalid}`
    : `${style['form-control']}`;
  const postCodeInputClasses = postCodeHasError
    ? `${style['form-control']} ${style.invalid}`
    : `${style['form-control']}`;

  return (
    <form className={style['cart-form']} onSubmit={submissionHandler}>
      <h2>Checkout</h2>
      <div className={nameInputClasses}>
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={style['error-text']}>Full Name can't be empty!</p>
        )}
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="address">Address *</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressHasError && (
          <p className={style['error-text']}>Address can't be empty!</p>
        )}
      </div>
      <div className={postCodeInputClasses}>
        <label htmlFor="post-code">Post Code *</label>
        <input
          id="post-code"
          type="text"
          value={postCode}
          onChange={postCodeChangeHandler}
          onBlur={postCodeBlurHandler}
        />
        {postCodeHasError && (
          <p className={style['error-text']}>Post Code can't be empty!</p>
        )}
      </div>
      <div className={style.buttons}>
        <button
          className={`${style['close-button']} ${
            !formIsValid ? style.orange : ''
          }`}
          onClick={onCloseCart}
        >
          close
        </button>
        <button className={style['checkout-button']} disabled={!formIsValid}>
          {isSubmithing ? 'Submiting...' : `Checkout ${formattedTotal}`}
        </button>
      </div>
    </form>
  );
};

export default CartForm;
