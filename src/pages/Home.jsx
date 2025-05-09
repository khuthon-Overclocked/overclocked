import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Newsletter from '../partials/Newsletter';
import FeaturesZigzag from '../partials/FeaturesZigzag';
import Footer from '../partials/Footer';
import ShortsSlider from '../partials/ShortsSlider';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesZigzag />

        <ShortsSlider />
        <Newsletter />


      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;