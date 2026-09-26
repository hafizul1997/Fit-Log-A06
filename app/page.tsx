import React from 'react';
import HeroPage from './Components/shared/HomePage/Hero';
import Workouts from './Components/shared/HomePage/Workouts';

const HomePage = () => {
  return (
    <div>
      <HeroPage />
      <Workouts />
    </div>
  );
};

export default HomePage;