import React from 'react';

const MealsContext = React.createContext({
  meals: [],
  selectedCategory: '',
  selectCategoryHandler: (category) => {},
});

export default MealsContext;
