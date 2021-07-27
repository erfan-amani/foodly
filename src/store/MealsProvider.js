import { useCallback, useReducer } from 'react';
import MealsContext from './meals-context';

const defaultMealsState = {
  meals: [],
  filteredMeals: [],
  selectedCategory: 'Pizza',
};

const mealsReducer = (state, action) => {
  if (action.type === 'INITIAL_MEALS') {
    const pizzas = action.data.filter((meal) => meal.category === 'Pizza');

    return {
      meals: action.data,
      filteredMeals: pizzas,
      selectedCategory: state.selectedCategory,
    };
  }
  if (action.type === 'SELECT_CATEGORY') {
    const updatedCategory = action.category;

    const updatedFilteredMeals = state.meals.filter(
      (meal) => meal.category === updatedCategory
    );

    return {
      meals: state.meals,
      filteredMeals: updatedFilteredMeals,
      selectedCategory: updatedCategory,
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

  const initialMealsData = useCallback((data) => {
    dispatchMealsAction({ type: 'INITIAL_MEALS', data });
  }, []);

  const mealsContext = {
    meals: mealsState.meals,
    selectedCategory: mealsState.selectedCategory,
    filteredMeals: mealsState.filteredMeals,
    selectCategoryHandler: selectCategoryHandler,
    initialMealsData: initialMealsData,
  };

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
