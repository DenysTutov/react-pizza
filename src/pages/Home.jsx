import { useState, useEffect } from "react";

import {
  Categories,
  Sort,
  PizzaBlock,
  PizzaBlockSkeleton,
} from "../components";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryIdx, setCategoryIdx] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    const category = categoryIdx > 0 ? `category=${categoryIdx}` : "";
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = `sortBy=${sortType.sortProperty.replace(
      "-",
      ""
    )}&order=${order}`;

    const sort = categoryIdx === 0 ? sortBy : `&${sortBy}`;

    setIsLoading(true);

    fetch(
      `https://6354da35da523ceadcf4f9d8.mockapi.io/items?${category}${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [categoryIdx, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryIdx}
          onChangeCategory={(idx) => setCategoryIdx(idx)}
        />
        <Sort value={sortType} onChangeSortType={(obj) => setSortType(obj)} />
      </div>

      <h1 className="content__title">Все пиццы</h1>

      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, idx) => <PizzaBlockSkeleton key={idx} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
