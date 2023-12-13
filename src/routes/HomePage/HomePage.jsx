import React from 'react';
import Header from '../../components/HomePage/Header/Header';
import Footer from '../../components/HomePage/Footer/Footer';
import Specials from '../../components/HomePage/Specials/Specials';
import AboutUs from '../../components/HomePage/About Us/AboutUs';
import Hours from '../../components/HomePage/Hours/Hours';

export default function HomePage() {
  return (
    <>
      <Header />
      <Specials />
      <AboutUs />
      <Hours />
      <Footer />
    </>
  );
}
