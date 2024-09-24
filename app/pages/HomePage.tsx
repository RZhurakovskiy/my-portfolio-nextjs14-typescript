import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contacts from "../components/Contacts";

import Footer from "../components/Footer";

const HomePage: React.FC = () => (
  <div>
    <Header />
    <main>
      <About />
      <Portfolio />
      <Contacts />
    </main>
    <Footer />
  </div>
);

export default HomePage;
