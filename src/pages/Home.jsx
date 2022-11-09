import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { fetchPizzas, selectorPizza } from 'redux/slices/pizzaSlice';
import { selectorFilter, setFilters } from 'redux/slices/filterSlice';
import {
  Categories,
  Sort,
  PizzaBlock,
  PizzaBlockSkeleton,
} from '../components';
import { sortList } from 'components/Sort';

const Home = () => {
  const dispatch = useDispatch();
  const navigateRef = useRef(useNavigate());

  const { categoryIdx, sortType } = useSelector(selectorFilter);
  const { items, status, isModalOpen } = useSelector(selectorPizza);
  const { searchValue } = useSelector(selectorFilter);

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
    const getPizzas = () => {
      const search = searchValue ? `&search=${searchValue}` : '';
      const category = categoryIdx > 0 ? `category=${categoryIdx}` : '';
      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = `sortBy=${sortType.sortProperty.replace(
        '-',
        ''
      )}&order=${order}`;
      const sort = categoryIdx === 0 ? sortBy : `&${sortBy}`;

      dispatch(fetchPizzas({ category, sort, search }));
    };

    if (!isSearch.current) {
      getPizzas();
    }

    window.scrollTo(0, 0);

    isSearch.current = false;
  }, [categoryIdx, dispatch, searchValue, sortType]);

  useEffect(() => {
    if (isMounted.current && !isModalOpen) {
      const queryString = qs.stringify({
        categoryIdx,
        sortProperty: sortType.sortProperty,
      });
      navigateRef.current(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryIdx, isModalOpen, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>

        <h1 className="content__title">Все пиццы</h1>

        <div className="content__items">
          {status === 'error' && <div>Упс, произошла ошибка</div>}

          {status === 'pending'
            ? [...new Array(8)].map((_, idx) => (
                <PizzaBlockSkeleton key={idx} />
              ))
            : items.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
