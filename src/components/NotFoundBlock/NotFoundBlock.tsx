import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        Not found
      </h1>

      <p className={styles.discription}>Sorry, this page is missing.</p>
    </div>
  );
};
