import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LayoutModal } from 'layout/LayoutModal/LayoutModal';
import styles from './LayoutConfirmModal.module.scss';
import { CartItemProps } from 'components/CartItem';

type LayoutConfirmModalProps = {
  title: string;
  confirm: {
    payload?: CartItemProps;
    type: string;
  };
  navTo: string;
};

export const LayoutConfirmModal: React.FC<LayoutConfirmModalProps> = ({
  title,
  confirm,
  navTo,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LayoutModal navTo={'/cart'}>
      <div className={styles.modal}>
        <div className={styles.title}>{title}</div>

        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={() => {
              navigate(navTo);
            }}
          >
            <span>No</span>
          </button>

          <button
            className={styles.button}
            onClick={() => {
              dispatch(confirm);
              navigate(navTo);
            }}
          >
            <span>Yes</span>
          </button>
        </div>
      </div>
    </LayoutModal>
  );
};
