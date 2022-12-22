import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setIsModalOpen } from 'redux/slices/pizzaSlice';
import styles from './Modal.module.scss';

type ModalProps = {
  children: any;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.code === 'Escape') {
        dispatch(setIsModalOpen(false));
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, navigate]);

  const handleBackdropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(setIsModalOpen(false));
      navigate('/');
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
