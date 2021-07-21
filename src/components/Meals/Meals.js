import style from './Meals.module.css';
import MealsList from './MealsList';

const Meals = () => {
  return (
    <div className={style.meals}>
      <h2>Meals</h2>
      <MealsList />
    </div>
  );
};

export default Meals;
