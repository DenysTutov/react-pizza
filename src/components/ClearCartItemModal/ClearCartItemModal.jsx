import React from 'react';
import { useParams } from 'react-router-dom';

import { removeItem, selectorCart } from 'redux/slices/cartSlice';
import { LayoutConfirmModal } from 'layout/LayoutConfirmModal/LayoutConfirmModal';
import { useSelector } from 'react-redux';

export const ClearCartItemModal = () => {
  const { param } = useParams();
  const paramArr = param?.split('&');
  const { items } = useSelector(selectorCart);
  const findPizza = items.find(
    item =>
      item.id === paramArr[0] &&
      item.size === Number(paramArr[1]) &&
      item.type === paramArr[2]
  );

  return (
    <LayoutConfirmModal
      title={'Are you really want delete pizza?'}
      confirm={removeItem(findPizza)}
      navTo={'/cart'}
    />
  );
};
