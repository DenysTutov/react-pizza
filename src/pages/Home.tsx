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
  NotFoundError,
  PizzaBlockSkeleton,
} from '../components';
import { sortList } from 'components/Sort';
import { categoriesList } from 'components/Categories';
import { PizzaBlockProps } from 'components/PizzaBlock/PizzaBlock';

const Home = () => {
  const dispatch = useDispatch();
  const navigateRef = useRef(useNavigate());

  const { categoryIdx, sortType, searchValue } = useSelector(selectorFilter);
  const { items, status } = useSelector(selectorPizza);

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
      //@ts-ignore
      dispatch(fetchPizzas({ category, sort, search }));
    };

    if (!isSearch.current) {
      getPizzas();
    }

    window.scrollTo(0, 0);

    isSearch.current = false;
  }, [categoryIdx, dispatch, searchValue, sortType]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryIdx,
        sortProperty: sortType.sortProperty,
      });
      navigateRef.current(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryIdx, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>

        <h1 className="content__title">{categoriesList[categoryIdx]} pizzas</h1>

        {status === 'error' && (
          <NotFoundError title={'Oops, an error occurred'} />
        )}

        {items.length === 0 && status !== 'error' && status !== 'pending' && (
          <NotFoundError
            title={'Oops...'}
            discription={`Not found pizza with name ${searchValue}`}
          />
        )}

        <div className="content__items">
          {status === 'pending' &&
            [...new Array(4)].map((_, idx) => <PizzaBlockSkeleton key={idx} />)}

          {status === 'success' &&
            items.map((pizza: PizzaBlockProps) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
