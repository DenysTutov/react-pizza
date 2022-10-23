import { useState, useEffect } from 'react';
import { Header, Categories, Sort, PizzaBlock } from 'components';
import './scss/app.scss';

export const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6354da35da523ceadcf4f9d8.mockapi.io/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

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
            {items.map(pizza => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
