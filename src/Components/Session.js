import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

function Session(props) {
  const {
    handleDecrementSessionLength,
    handleIncrementSessionLength,
    sessionLengthInSeconds,
  } = props;

  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, 's')
    .minutes();

  return (
    <div>
      <h1 id='session-label'>WorkController - Session Label</h1>
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
  handleDecrementSessionLength: PropTypes.number.isRequired,
  handleIncrementSessionLength: PropTypes.number.isRequired,
  sessionLengthInSeconds: PropTypes.number.isRequired,
};

export default Session;
