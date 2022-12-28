import React from 'react';
import { useParams } from 'react-router-dom';

import { removeItem } from 'redux/slices/cartSlice';
import { LayoutConfirmModal } from 'layout/LayoutConfirmModal/LayoutConfirmModal';

export const ClearCartItemModal = () => {
  const { id } = useParams();

  return (
    <LayoutConfirmModal
      title={'Are you really want delete pizza?'}
      confirm={removeItem(id)}
      navTo={'/cart'}
    />
  );
};
