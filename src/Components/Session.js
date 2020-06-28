import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Session(props) {
  const {
    sessionLengthInSeconds,
    handleIncrementSessionLength,
    handleDecrementSessionLength,
  } = props;

  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, 's')
    .minutes();

  return (
    <div>
      <h1 id='session-label'>Work</h1>
      <button
        id='session-increment'
        type='button'
        onClick={handleIncrementSessionLength}
      >
        {' '}
        +{' '}
      </button>
      <span>{sessionLengthInMinutes}</span>
      <button
        id='session-decrement'
        type='button'
        onClick={handleDecrementSessionLength}
      >
        {' '}
        -{' '}
      </button>
    </div>
  );
}

Session.propTypes = {
  sessionLengthInSeconds: PropTypes.number.isRequired,
  handleIncrementSessionLength: PropTypes.func.isRequired,
  handleDecrementSessionLength: PropTypes.func.isRequired,
};

export default Session;
