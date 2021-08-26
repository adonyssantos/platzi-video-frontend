import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = props => {
  const { isHome, getVideoSearch } = props;
  const inputStyle = classNames('input', { isHome });

  const handleInput = event => {
    getVideoSearch(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>What do you want to see today?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Search...'
        onKeyUp={handleInput}
      />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
