import React from 'react';
import PropTypes from 'prop-types';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { MdReplay } from 'react-icons/md';
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs';
import Modal from './Modal/Modal';

function Controls({
  isStarted,
  handleStartStopClick,
  handleResetButtonClick,
  handleInfoButtonClick,
  showModal,
}) {
  return (
    <div className='flex items-center justify-center'>
      <button
        type='button'
        id='reset'
        onClick={handleResetButtonClick}
        className='flex items-center justify-center w-12 h-12 border-solid border-2 border-secondary hover:border-white rounded-full'
      >
        <MdReplay id='reset' className='text-center' />
      </button>
      <button
        onClick={handleStartStopClick}
        type='button'
        id='start_stop'
        className='w-16 h-16 border-solid border-2 border-secondary hover:border-white rounded-full m-6 flex items-center justify-center'
      >
        {isStarted ? (
          <BsFillPauseFill id='start_stop' />
        ) : (
          <BsPlayFill id='start_stop' color='white' size='2em' />
        )}
      </button>
      <button
        onClick={handleInfoButtonClick}
        type='button'
        id='info'
        className='flex items-center justify-center w-12 h-12 border-solid border-2 border-secondary hover:border-white rounded-full'
      >
        <IoMdInformationCircleOutline id='info' />
      </button>
      {showModal ? (
        <Modal handleInfoButtonClick={handleInfoButtonClick} />
      ) : null}
    </div>
  );
}

Controls.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  handleStartStopClick: PropTypes.func.isRequired,
  handleResetButtonClick: PropTypes.func.isRequired,
  handleInfoButtonClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
export default Controls;
