import style from './App.module.css';
import CategoryList from './components/Category/CategoryList';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <CategoryList />
        <Meals />
      </main>
    </>
  );
};

export default App;
