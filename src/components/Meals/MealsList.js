import style from './MealsList.module.css';
import MealItem from './MealItem/MealItem';
import { useContext } from 'react';
import MealsContext from '../../store/meals-context';

const MealsList = () => {
  const { meals } = useContext(MealsContext);

  return (
    <div className={style['meals-list']}>
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </div>
  );
};

export default MealsList;
