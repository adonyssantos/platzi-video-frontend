import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

export const App = () => {
  const API = 'http://localhost:3000/initalState';
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error(error.message));
  }, []);

  console.log(videos);

  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title='My list'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='Trending'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='PlatziVideo Originals'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
