import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryIdx } from 'redux/slices/filterSlice';

const categoriesList = [
  'All',
  'Meat',
  'Vegetarian',
  'Grill',
  'Spicy',
  'Closed',
];

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryIdx: value } = useSelector((state: any) => state.filter);

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((category, idx) => (
          <li
            key={category}
            onClick={() => dispatch(setCategoryIdx(idx))}
            className={value === idx ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
