import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LayoutModal } from 'layout/LayoutModal/LayoutModal';
import styles from './LayoutConfirmModal.module.scss';

export const LayoutConfirmModal = ({ title, confirm, navTo }) => {
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
