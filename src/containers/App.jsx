import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
    </div>
  );
};

export default App;
