import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import React from 'react';

function MyLoader() {
  return (
    <Loader
      style={{ 'text-align': 'center' }}
      type='Watch'
      color='#d33682'
      height={300}
      width={300}
    />
  );
}

export default MyLoader;
