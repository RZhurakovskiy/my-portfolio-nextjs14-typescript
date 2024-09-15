import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const HomePage: React.FC = () => (
  <div>
    <Header />
    <main>
      <Portfolio />
      <Contacts />
    </main>
    <Footer />
  </div>
);

export default HomePage;
