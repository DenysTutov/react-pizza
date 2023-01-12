import React from 'react';

import styles from './NotFoundError.module.scss';

type NotFoundErrorProps = {
  title: string;
  discription?: string;
};

export const NotFoundError: React.FC<NotFoundErrorProps> = ({
  title,
  discription,
}) => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        {title}
      </h1>

      <p className={styles.discription}>{discription && discription}</p>
    </div>
  );
};
