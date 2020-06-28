import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Break(props) {
  const {
    breakLengthInSeconds,
    handleIncrementBreakLength,
    handleDecrementBreakLength,
  } = props;

  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, 's')
    .minutes();
  return (
    <div>
      <h1 id='break-label'>Break</h1>
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
  handleDecrementBreakLength: PropTypes.func.isRequired,
  handleIncrementBreakLength: PropTypes.func.isRequired,
};

export default Break;
