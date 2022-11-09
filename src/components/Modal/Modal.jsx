import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setIsModalOpen } from 'redux/slices/pizzaSlice';
import styles from './Modal.module.scss';

export const Modal = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = event => {
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

  const handleBackdropClick = event => {
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
