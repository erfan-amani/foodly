import { useState } from 'react';
import style from './App.module.css';
import Cart from './components/Cart/Cart';
import CategoryList from './components/Category/CategoryList';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  const [isCartIsVisible, setIsCartIsVisible] = useState(false);

  const openCart = () => {
    setIsCartIsVisible(true);
  };

  const closeCart = () => {
    setIsCartIsVisible(false);
  };

  return (
    <>
      {isCartIsVisible && <Cart onCloseCart={closeCart} />}
      <Header onOpenCart={openCart} />
      <main className={style.main}>
        <CategoryList />
        <Meals />
      </main>
    </>
  );
};

export default App;
