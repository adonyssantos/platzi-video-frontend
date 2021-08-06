import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', { isHome });

  return (
    <section className='main'>
      <h2 className='main__title'>What do you want to see today?</h2>
      <input type='text' className={inputStyle} placeholder='Search...' />
    </section>
  );
};

export default Search;
