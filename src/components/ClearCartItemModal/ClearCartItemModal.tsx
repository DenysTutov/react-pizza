import React from 'react';
import { useParams } from 'react-router-dom';

import { removeItem, selectorCart } from 'redux/slices/cartSlice';
import { LayoutConfirmModal } from 'layout/LayoutConfirmModal/LayoutConfirmModal';
import { useSelector } from 'react-redux';

type QueryParams = {
  param: string;
};

export const ClearCartItemModal: React.FC = () => {
  const { param } = useParams<QueryParams>();
  const { items } = useSelector(selectorCart);

  const paramArr: string[] | undefined = param?.split('&');

  const pizza = paramArr
    ? items.find(
        (item: { id: string; size: number; type: string }) =>
          item.id === paramArr[0] &&
          item.size === Number(paramArr[1]) &&
          item.type === paramArr[2]
      )
    : {};

  return (
    <LayoutConfirmModal
      title={'Are you really want delete pizza?'}
      confirm={removeItem(pizza)}
      navTo={'/cart'}
    />
  );
};
