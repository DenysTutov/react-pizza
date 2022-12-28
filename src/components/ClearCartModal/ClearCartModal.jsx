import React from 'react';

import { clearItems } from 'redux/slices/cartSlice';
import { LayoutConfirmModal } from 'layout/LayoutConfirmModal/LayoutConfirmModal';

export const ClearCartModal = () => {
  return (
    <LayoutConfirmModal
      title={'Are you really want clear cart?'}
      confirm={clearItems()}
      navTo={'/cart'}
    />
  );
};
