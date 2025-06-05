import React from 'react';
import './loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="aws-loader">
      <div className="aws-loader__symbol">
        <div className="aws-loader__arc"></div>
        <div className="aws-loader__arc"></div>
        <div className="aws-loader__arc"></div>
      </div>
      <div className="aws-loader__text">Loading...</div>
    </div>
  );
};

export default Loader;