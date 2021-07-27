import React from 'react';

const MealsContext = React.createContext({
  meals: [],
  filteredMeals: [],
  selectedCategory: '',
  selectCategoryHandler: (category) => {},
  initialMealsData: (data) => {},
});

export default MealsContext;
