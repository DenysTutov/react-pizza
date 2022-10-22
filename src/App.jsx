import { Header, Categories, Sort, PizzaBlock } from 'components';
import pizzas from 'assets/pizza.json';
import './scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />

            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map(pizza => (
              <PizzaBlock {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
