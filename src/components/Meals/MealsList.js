import style from './MealsList.module.css';
import { MEALS_DATA } from './mealsData';
import MealItem from './MealItem/MealItem';

const MealsList = () => {
  return (
    <div className={style['meals-list']}>
      {MEALS_DATA.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
};

export default MealsList;
