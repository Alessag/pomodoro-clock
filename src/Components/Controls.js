import React from 'react';
import PropTypes from 'prop-types';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdReplay } from 'react-icons/md';
import { GrPlayFill } from 'react-icons/gr';
import { BsFillPauseFill } from 'react-icons/bs';

function Controls({ isStarted, handleStartStopClick, handleResetButtonClick }) {
  return (
    <div className='controls'>
      <button
        type='button'
        id='reset'
        className='controls__btn'
        onClick={handleResetButtonClick}
      >
        <MdReplay id='reset' className='controls__icons' />
      </button>

      <button
        onClick={handleStartStopClick}
        type='button'
        id='start_stop'
        className='controls__btn controls__btn-md'
      >
        {isStarted ? (
          <BsFillPauseFill id='start_stop' className='controls__icons' />
        ) : (
          <GrPlayFill id='start_stop' className='controls__icons' />
        )}
      </button>

      <button type='button' id='info' className='controls__btn'>
        <IoMdInformationCircleOutline id='info' className='controls__icons' />
      </button>
    </div>
  );
}

Controls.propTypes = {
  isStarted: PropTypes.string.isRequired,
  handleStartStopClick: PropTypes.func.isRequired,
  handleResetButtonClick: PropTypes.func.isRequired,
};
export default Controls;
