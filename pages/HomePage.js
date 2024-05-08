import React from 'react';
import Navbar from '../components/Navbar';
import Matter from '../components/Matter';
import BottomContainer from '../components/BottomContainer';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Matter />
      <BottomContainer />
      <Footer />
    </div>
  );
};

export default HomePage;
