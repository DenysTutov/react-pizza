import React from 'react';
import { NotFoundError } from 'components';

const NotFound: React.FC = () => {
  return (
    <NotFoundError
      title={'Not found'}
      discription={'Sorry, this page is missing.'}
    />
  );
};

export default NotFound;
