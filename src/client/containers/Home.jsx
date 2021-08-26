import React from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Search,
  Categories,
  Carousel,
  CarouselItem,
} from '../components';
import '../assets/styles/Home.scss';

export const Home = ({ myList, trends, originals, searchResult }) => {
  return (
    <>
      <Header />
      <Search isHome />

      {Object.keys(searchResult).length > 0 && (
        <Categories title='Search results'>
          <Carousel>
            {searchResult.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}

      {myList.length > 0 && (
        <Categories title='My list'>
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title='Trending'>
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='PlatziVideo Originals'>
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};

export default connect(mapStateToProps, null)(Home);
