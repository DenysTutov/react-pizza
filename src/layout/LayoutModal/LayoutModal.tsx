import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './LayoutModal.module.scss';

type ModalProps = {
  children: any;
  navTo: string;
};

export const LayoutModal: React.FC<ModalProps> = ({ children, navTo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.code === 'Escape') {
        navigate(navTo);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, navigate, navTo]);

  const handleBackdropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      navigate(navTo);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modalWrapper}>{children}</div>
    </div>
  );
};
