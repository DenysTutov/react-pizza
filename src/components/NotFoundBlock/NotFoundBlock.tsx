import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        Ничего не найдено
      </h1>

      <p className={styles.discription}>
        К сожалению данная страница отсутствует
      </p>
    </div>
  );
};
