import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Modal.module.scss';

export const Modal = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      navigate('/');
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
