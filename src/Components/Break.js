import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Break(props) {
  const {
    breakLengthInSeconds,
    handleDecrementBreakLength,
    handleIncrementBreakLength,
  } = props;

  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, 's')
    .minutes();
  return (
    <div>
      <h1 id='break-label'>Break Lenght</h1>
      <button
        type='button'
        id='break-increment'
        onClick={handleIncrementBreakLength}
      >
        {' '}
        +{' '}
      </button>
      <span id='break-length'>{breakLengthInMinutes}</span>
      <button
        type='button'
        id='break-decrement'
        onClick={handleDecrementBreakLength}
      >
        {' '}
        -{' '}
      </button>
    </div>
  );
}

Break.propTypes = {
  breakLengthInSeconds: PropTypes.number.isRequired,
  handleDecrementBreakLength: PropTypes.number.isRequired,
  handleIncrementBreakLength: PropTypes.number.isRequired,
};

export default Break;
