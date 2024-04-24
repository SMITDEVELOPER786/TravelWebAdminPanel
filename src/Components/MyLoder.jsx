import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const MyLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#FE9515"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default MyLoader;