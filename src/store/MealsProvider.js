import { useReducer } from 'react';
import MealsContext from './meals-context';
import { MEALS_DATA } from '../mealsData';

const pizzas = MEALS_DATA.filter((meal) => meal.category === 'Pizza');
const defaultMealsState = {
  meals: pizzas,
  selectedCategory: 'Pizza',
};

const mealsReducer = (state, action) => {
  if (action.type === 'SELECT_CATEGORY') {
    const updatedCategory = action.category;

    const filteredMeals = MEALS_DATA.filter(
      (meal) => meal.category === updatedCategory
    );

    return {
      meals: filteredMeals,
      selectedCategory: action.category,
    };
  }

  return defaultMealsState;
};

const MealsProvider = (props) => {
  const [mealsState, dispatchMealsAction] = useReducer(
    mealsReducer,
    defaultMealsState
  );

  const selectCategoryHandler = (category) => {
    dispatchMealsAction({ type: 'SELECT_CATEGORY', category: category });
  };

  const mealsContext = {
    meals: mealsState.meals,
    selectedCategory: mealsState.selectedCategory,
    selectCategoryHandler: selectCategoryHandler,
  };

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
