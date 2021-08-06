import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Player.scss';

const Player = props => {
  return (
    <div className='Player'>
      <video controls autoplay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Back
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {};

export default Player;
