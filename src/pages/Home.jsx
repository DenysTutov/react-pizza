import { useState, useEffect, useContext, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import { setFilters } from 'redux/slices/filterSlice';
import {
  Categories,
  Sort,
  PizzaBlock,
  PizzaBlockSkeleton,
} from '../components';
import { SearchContext } from 'App';
import { sortList } from 'components/Sort';

const Home = () => {
  const { categoryIdx, sortType } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(
        obj => obj.sortProperty === params.sortProperty
      );

      dispatch(setFilters({ ...params, sortType: sort }));

      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isSearch.current) {
      const search = searchValue ? `&search=${searchValue}` : '';
      const category = categoryIdx > 0 ? `category=${categoryIdx}` : '';
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

      const sortBy = `sortBy=${sortType.sortProperty.replace(
        '-',
        ''
      )}&order=${order}`;

      const sort = categoryIdx === 0 ? sortBy : `&${sortBy}`;

      setIsLoading(true);

      axios
        .get(
          `https://6354da35da523ceadcf4f9d8.mockapi.io/items?${category}${sort}${search}`
        )
        .then(res => {
          setItems(res.data);
          setIsLoading(false);
        });
    }

    window.scrollTo(0, 0);

    isSearch.current = false;
  }, [categoryIdx, searchValue, sortType]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryIdx,
        sortProperty: sortType.sortProperty,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryIdx, navigate, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>

      <h1 className="content__title">Все пиццы</h1>

      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, idx) => <PizzaBlockSkeleton key={idx} />)
          : items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
