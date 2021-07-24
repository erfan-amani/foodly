import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import style from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const imageSrc = require(`../../../assets/img/${props.category
    .toLowerCase()
    .split(' ')
    .join('-')}/${props.image}`).default;

  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    cartCtx.addItem({ ...props, amount: amount });
  };

  return (
    <div className={style['meal-item']}>
      <img className={style.image} src={imageSrc} alt="delicious meal" />
      <div className={style.detail}>
        <div className={style.text}>
          <h3 className={style.name}>{props.name}</h3>
          <p className={style.price}>{formattedPrice}</p>
        </div>
        <MealItemForm price={props.price} onSubmit={addItemToCart} />
      </div>
    </div>
  );
};

export default MealItem;
