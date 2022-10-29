import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setCategoryIdx, setSortType } from "redux/slices/filterSlice";
import {
  Categories,
  Sort,
  PizzaBlock,
  PizzaBlockSkeleton,
} from "../components";
import { SearchContext } from "App";

const Home = () => {
  const { categoryIdx, sortType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeCategoryIdx = (idx) => {
    dispatch(setCategoryIdx(idx));
  };

  const handleChangeSortType = (obj) => {
    dispatch(setSortType(obj));
  };

  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";
    const category = categoryIdx > 0 ? `category=${categoryIdx}` : "";
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    const sortBy = `sortBy=${sortType.sortProperty.replace(
      "-",
      ""
    )}&order=${order}`;

    const sort = categoryIdx === 0 ? sortBy : `&${sortBy}`;

    setIsLoading(true);

    axios
      .get(
        `https://6354da35da523ceadcf4f9d8.mockapi.io/items?${category}${sort}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryIdx, searchValue, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryIdx}
          onChangeCategory={handleChangeCategoryIdx}
        />
        <Sort value={sortType} onChangeSortType={handleChangeSortType} />
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
